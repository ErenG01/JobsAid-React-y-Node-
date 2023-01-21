import React,{useState, useEffect} from "react";

function PerfilUSer() {

    const [userinfo, setUserinfo] = useState([])

    
    useEffect(() =>{
        const localUserState = localStorage.getItem("loggedUsersform")
        const user = JSON.parse(localUserState)
        
         console.log(user.Id_usuario)
        
            const datesUser = () =>{
                fetch(`http://localhost:9000/api/user/${user.Id_usuario}`)
                .then(res => res.json())
                .then(res => setUserinfo(res))
            }
           datesUser()
           
           
             
        }, [])

       

    return(
        <>
        {
            userinfo.map(Lista =>(
                
            <div className="InfoPerfilBox">

                <img className="imgPerfil" src={Lista.foto} alt="" />
                <h1 className="font-weight-bold">{Lista.nombre}</h1> 
                <p>{Lista.profesion}</p>
                <p>{Lista.cuidad}</p>
                <p>Cundinamarca</p>
                <hr/>
                    <h1 className="font-weight-bold">Archivo subido</h1>
                        <p>CVSofiarodriguez.pdf</p>
                        <hr/>
                            <h1 className="font-weight-bold">informacion de contacto</h1>
                            <p>{Lista.correo}</p>
                            <p>{Lista.telefono}</p>
            </div>
        ))
        }
       </>
    )
}


export default PerfilUSer;