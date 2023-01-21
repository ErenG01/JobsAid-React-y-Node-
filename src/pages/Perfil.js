import { BrowserRouter as Router, Routes, Route, BrowserRouter, json, UNSAFE_enhanceManualRouteObjects} from "react-router-dom";

import '../css/profile.css';
import { useEffect, useState } from "react";




function Perfil() {


    
    const [userData, setUserData] = useState([])

   
    useEffect(() =>{
        

        const datesUser = () =>{
            const localUserState = localStorage.getItem("loggedUsersform")
            const user = JSON.parse(localUserState)
            
            fetch(`http://localhost:9000/api/user/${user.Id_usuario}`)
            .then(res => res.json())
            .then(res => setUserData(res))
        
        
    }
    datesUser()
      
    }, [])



    const [file ,setFile] = useState(null)
   
    const selectedHandler = (e) =>{
    setFile(e.target.files[0])
    
   } 
   
   const sendHandler = () =>{
    
        if (!File) {
            alert('debes cargar algun archivo')
            return
        }else{

            const localUserState = localStorage.getItem("loggedUsersform")
            const user = JSON.parse(localUserState)

            const formdata = new FormData()
            formdata.append('image', file)
    
            const requestInit = {
                method: 'POST',
                body: formdata
            }
    
                fetch(`http://localhost:9000/api/image/post/${user.Id_usuario}`, requestInit)
                .then(res => res.text())
                .then(res => console.log(res)) 
                .catch(err => {
                    console.log(err)
                })
    
                document.getElementById('fileinput').value = null
    
                setFile(null)
        }

      
   }   
   
    return(
    <>
        
           


           <div className="general_container">


               <div className="" id="navega">
                   <div className="navUsuario">
                       <ul>
                            <li><a href="/perfil/user" id="applications">Perfil</a></li>

                            <li><a href="/perfil/postulations" id="applications">postulaciones</a></li>
                            <li><a href="/perfil/Emailbox" id="emailBox">bandeja de entrada</a></li>
                            <li><a href="/perfil/settings" id="settings">configuracion</a></li>
                            <li><a href="/Perfil/curriculum" id="cv">hoja de vida</a></li>
                       </ul>
                   </div>
               </div>

               <div className="perfil" id="perfil">
                    <div className="formularioPerfil">
                        {
                            userData.map(lista =><img src={lista.foto} key={lista.Id_usuario} className="imgPerfil2" alt="foto perfil"/>
                        )
                        }

                                <h2></h2>
                                <input type="file" id="fileinput" onChange={selectedHandler}  name="upPicture"/>
                                <br/>
                                <button onClick={sendHandler} className="btn btn-primary " id="btnPerfil">cambiar foto de perfil</button>

                    </div>
                </div>


               <div className="containerprofile" id="containerprofile">
                

               </div>
               
              

               <footer className="" id="footers2">
     
               </footer>

            </div>    
    </>
   ) 
}

export default Perfil