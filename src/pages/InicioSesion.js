
import '../css/InicioSesion.css';
import logo from '../img/Logo_V3.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import RegistroSesion from './RegistroUsuario';


function InicioSesion() {

    const {register, handleSubmit, formState: { errors } } = useForm();

   

   
  
   const customSubmit = (data) =>{
    console.log(data)
    
    const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
       

        fetch(`http://localhost:9000/api/sesion`, requestInit)
        .then(res => res.json())
        .then(res =>  {
            if (res != '') {
                const loggedUserJSON = localStorage.setItem('loggedUsersform', JSON.stringify(res[0]))
                window.location.href = "http://localhost:3000/inicio";
            }else{
                alert('la contraseña o usuario son incorrectos');
                console.log('es undefinido')
            }
        })
        
        
      

    };

    return(
        <div className=''>
            <div className='container1y2'>
                <div className="containerrojo">

                    <div className="containerlogo">

                        <div className="logoscroll">
                            <a href="index.php"><img src={logo} alt="" className='logo'/></a>

                            <p>la mejor manera para encontrar el trabajo de tus sueños</p>
                        </div>



                    </div>

                    <div className="container2">

                        <div className='todo'></div>

                        <div className='formulario1' id='formulario1'>
                            <form onSubmit={handleSubmit(customSubmit)}className="formulario_Sesion" >
                                <h1 className="H1Bienvenido_Sesion">Inicar sesion</h1>


                                <input
                                    className="form-control mb-2"
                                    placeholder="Ingrese su correo"
                                    type="text"
                                    id="userEmail"
                                    name="userEmail"
                                    {...register('email',{ required:true })}
                                />
                                {errors.email && <small>El campo no puede estar vacio</small>}

                                <input
                                    className="form-control mb-2"
                                    placeholder="Contraseña"
                                    type="password"
                                    id="password"
                                    name="password"
                                    {...register('passw', {required: true})}
                                />
                                {errors.passw && <small>El campo no puede estar vacio</small>}
                                <br/>
                                <a href="" className="Forgetpassword">¿Olvidaste tu contraseña?</a>
                                <br />



                                <input type="submit" className="btn btn-primary" name="btn_inicio_s" value="Iniciar Sesion" />

                                <a href="#h1bienvenido" className="btn btn-primary">Registar</a>


                            </form>
                        </div>

                        <RegistroSesion></RegistroSesion>
                        
                        </div>

                    </div>



                </div>



                <footer>
                    <div className="backgroud">
                        <div className="credits">
                            <ul>
                                <li>Empleos</li>
                                <li>Salarios</li>
                                <li>Acerca de</li>
                                <li>© 2022 Jobs Aid</li>
                                <li>Cookies</li>
                                <li>privacidad</li>
                                <li>condiciones</li>
                            </ul>
                        </div>
                    </div>
                </footer>    


        </div>
    )
}

export default InicioSesion;


