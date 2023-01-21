import { useForm } from 'react-hook-form';
import { json } from 'react-router-dom';

function RegistroSesion() {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const formSubmit = (data) => {
        console.log(data)
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        fetch('http://localhost:9000/api/register', requestInit)
        .then(res => res.json())
        .then(res => res.send())

        alert('registrado con exito, por favor inicie sesion')
       window.location.href = "http://localhost:3000/AccesoUsuario"
    }

    return(

        <div>
            <div className='formulario2'>
                            <form onSubmit={handleSubmit(formSubmit)} method="POST" className="formulario" id="FormularioRegistro">
                                <h1 className="H1Bienvenido" id="h1bienvenido">Bienvenido</h1>
                                <input
                                    className="form-control mb-2"
                                    placeholder="nombre"
                                    type="text"
                                    
                                    {...register('name',{ required:true })}
                                />
                                <input
                                    className="form-control mb-2"
                                    placeholder="Apellido"
                                    type="text"
                                    {...register('lastName',{ required:true })}
                                />
                                <input
                                    className="form-control mb-2"
                                    placeholder="correo"
                                    type="text"
                                    {...register('Email',{ required:true })}
                                />

                                <input
                                    className="form-control mb-1"
                                    placeholder="Telefono"
                                    type="text"
                                    {...register('phone',{ required:true })}
                                />

                                <input
                                    className="form-control mb-1"
                                    placeholder="cuidad"
                                    type="text"
                                    {...register('city',{ required:true })}
                                />

                                <input
                                    className="form-control mb-1"
                                    placeholder="profesion"
                                    type="text"
                                    {...register('profession',{ required:true })}
                                />

                                <input
                                    className="form-control mb-2"
                                    placeholder="Contraseña"
                                    type="password"
                                    {...register('password',{ required:true })}

                                />


                                {/* <!-- imprimir los valores que se tiene guardados en la base de datos del rol --> */}

                                <select name="rol" id="rol">

                                    <option value=""></option>

                                </select>
                                <p>Al crear una cuenta o iniciar sesión, usted reconoce y acepta las condiciones de Job´s Aid. Además, reconoce nuestras políticas de cookies y privacidad. Recibirá mensajes de marketing y podrá darlos de baja en cualquier momento mediante el enlace para cancelar la suscripción que incluimos en nuestros mensajes, o según se detalla en nuestras condiciones.</p>

                                <button
                                    
                                    className="btn btn-primary">Registrar</button>
                                
            




                            </form>
            
                        </div>
        </div>
    )

    
}

export default RegistroSesion;