import React, { useEffect, useState } from "react";



function Settings() {

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


    return(
        <>
            {infoUser.map(info => 
            
                <div className="settingsbox">

                    <h1 className="font-weight-bold">Configuracion de cuenta</h1>
                    <hr/>
                    <p className="font-weight-bold">Nombre</p>
                    <p>{infoUser[0].nombre}</p>
                    <hr/>
                    <p className="font-weight-bold">apellido</p>
                    <p>{infoUser[0].apellido}</p>
                    <hr/>
                    <p className="font-weight-bold">Nombre de usuario</p>
                    <p>{infoUser[0].nombre}</p>
                    <hr/>
                    <p className="font-weight-bold">correo</p>
                    <p>{infoUser[0].correo}</p>
                    <hr/>
                        <p className="font-weight-bold">Contraseña</p>
                        <p>paswrod</p>
                        <hr/>
                            <p className="font-weight-bold">telefono</p>
                            <p>{infoUser[0].telefono}</p>
                            <hr/>
                                <p>Eliminar cuenta</p>
                                <li><a href="/perfil/Editdates">Editar datos</a></li>
                            </div>

                       
        
        )}
        </>
    )
}

export default Settings;