import React,{useState, useEffect} from "react";


function Postulation() {
    const [applys, setApplys] = useState([])


useEffect(() =>{
    const getofert = () =>{
        const localUserState = localStorage.getItem("loggedUsersform")
        const user = JSON.parse(localUserState)
        fetch(`http://localhost:9000/api/oferts/get/${user.Id_usuario}`)
        .then(res => res.json())
        .then(res => setApplys(res))
        console.log('hola me estoy ejecutando primeor')
        
       }
       getofert()
},[])

    return(
        <>
        
       

        
        
            <div className="MainContainerApplys">
                <h1>Mis postulaciones</h1>
                {applys.map(apply => (
                    <div className="ListApplysContainers">
                        <div className="ApplysContainers">
                        <h1 className="font-weight-bold">{apply.id_vacante}</h1>
                        <p>{apply.titulo_vacante}</p>
                        <p>{apply.industria}</p>
                        <p>{apply.Lugarempleo}</p>
                        </div>
                      
                        <button className="btn btn-info">Ver</button>

                         
                      
                    </div>
                        
                        
                )     
                )}
                

                <a href="/inicio" className="btn btn-primary" name="Ver empleos" type="submit">Ver mas Empleos</a>

        
                <br/>
            </div>
        
        
    
        
        
        
        
        </>
    )
}

export default Postulation;