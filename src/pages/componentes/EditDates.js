import React, {useEffect, useState}from "react";
import { useForm } from 'react-hook-form';

function EditDates () {

    const {register, handleSubmit, formState: { errors } } = useForm();


    const [infoUser, setInfoUser] = useState([])

    useEffect(()=>{
        const getInfo = () =>{
            const localUserState = localStorage.getItem("loggedUsersform")
            const user = JSON.parse(localUserState)
            fetch(`http://localhost:9000/api/user/${user.Id_usuario}`)
            .then(res => res.json())
            .then(res => setInfoUser(res))
        }
        getInfo()
        
    }, [])

    const formSubmit = (data) => {
        const localUserState = localStorage.getItem("loggedUsersform")
        const user = JSON.parse(localUserState)
        console.log(data)
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:9000/api/update/${user.Id_usuario}`, requestInit)
        .then(res => res.json())
        
        alert('Sus datos se han actualizado')
        
       window.location.href = "http://localhost:3000/perfil/settings"
    }
    const [Email, setEmail] = useState('')

    const nombre = (e) =>{
       infoUser[0].nombre = e.target.value;
       setInfoUser([infoUser]);
       
    }
    
    return(
        
        <>
            {infoUser.map(info =>
                <div className="formEditDates" key={info.Id_usuario} >
                    <form onSubmit={handleSubmit(formSubmit)} >
                        <label>nombre</label>
                        <input
                            type="text"
                            {...register('nombre', {required:true})} 
                            className="form-control"
                            onClick={ nombre }  value={info.nombre} />
                            {errors.name && <small>El campo no puede estar vacio</small>}
                        
                        <label>apellido</label>
                        <input
                            type="text"
                            {...register('apellido',{ required:true })}
                            className="form-control"
                            onClick={(e)=>{infoUser[0].apellido = e.target.value; setInfoUser([infoUser])}}
                            value={info.apellido}
                             />
                            {errors.lastName && <small>El campo no puede estar vacio</small>}

                        <label>email</label>
                        <input
                            type="text"
                            {...register('correo',{ required:true })}
                            className="form-control"
                            value={info.correo}
                            onClick={(e)=>{infoUser[0].correo = e.target.value; setInfoUser([infoUser])}}

                            />
                            {errors.Email && <small>El campo no puede estar vacio</small>}

                        
                        <label>telefono</label>
                        <input
                            type="text"
                            {...register('telefono',{ required:true })}
                            className="form-control"
                            value={info.telefono}
                            onClick={(e)=>{infoUser[0].telefono = e.target.value; setInfoUser([infoUser])}}

                            />
                            {errors.phone && <small>El campo no puede estar vacio</small>}

                        
                        <label>cuidad</label>
                        <input
                            type="text"
                            {...register('ciudad',{ required:true })} 
                            className="form-control"
                            value={info.ciudad}
                            onClick={(e)=>{infoUser[0].cuidad = e.target.value; setInfoUser([infoUser])}}

                            />
                            {errors.city && <small>El campo no puede estar vacio</small>}

                        
                        <label>Profession</label>
                        <input
                            type="text"
                            {...register('profesion',{ required:true })}
                            className="form-control"
                            value={info.profesion}
                            onClick={(e)=>{infoUser[0].profesion = e.target.value; setInfoUser([infoUser])}}

                            />
                            {errors.profession && <small>El campo no puede estar vacio</small>}
          
                        
                        <label>contraseña</label>
                        <input
                            type="text"
                            {...register('clave',{ required:true })} 
                            className="form-control"
                            value={info.clave}
                            onClick={(e)=>{infoUser[0].clave = e.target.value; setInfoUser([infoUser])}}
 
                            />
                            {errors.password && <small>El campo no puede estar vacio</small>}


                        <button type="submit" className="btn btn-primary" id="btnUpdateDates" >HECHO</button>

                    </form>
                </div>
            )}
        </>

    )
}

export default EditDates;