import React, { useEffect, useState } from "react";
import { BrowserRouter, json, Link, Router, useHistory } from "react-router-dom";
import '../css/nav.css';
import logo from '../img/Logo_V3.png';
import login from '../img/perfil2.png';
import InicioSesion, { customSubmit } from "./InicioSesion";





 function Naveg() {

    // const {user, setUser} = useState(null);

    // const logginState = () =>{

    //    const infoUsuario = customSubmit;
    //    console.log(infoUsuario);
    // }
    // logginState();

    const [userAccess, setUserAccess] = useState(false)

    const [userlogged, setUserLogged] = useState({})

    useEffect(() =>{
        
        const localUserState = localStorage.getItem('loggedUsersform')
        
        const addLi = `<li className="header__link" onClick={finSesion}><a href="/inicio">salir</a></li>`
        
        if (localUserState != null) {
            const user = JSON.parse(localUserState)
            setUserLogged(user)
            setUserAccess(true)
            
           
        }else{
            setUserAccess(false)
            
        }
         
    }, [])
   
       
      const finSesion = () =>{
        localStorage.removeItem('loggedUsersform')
       
      }

   
       
        
       
    
    
    
    


    return (
        <div className="Navegator">
            <div className="navBox">

                <a href="/inicio">

                    <div className="Logo">
                        <img src={logo} title="logoJobs" className="Log className"></img>

                    </div>
                </a>


                <div className="nav">

                    <ul className="navList" id="navList">
                        {/* <BrowserRouter>
                        <Link to="/inicio">inicio</Link>
                        <Link to="/publicarOferta">publicar oferta</Link>
                        <Link to="/CV">Hoja de vida</Link>
                        </BrowserRouter> */}

                        <li className="header__link"><a href="/inicio">Inicio</a></li>
                        <li className="header__link"><a href="/publicarOferta">Publicar oferta</a></li>
                        <li className="header__link" id="CV"><a href={userAccess ? "perfil" : "AccesoUsuario"}>Hoja de vida</a></li>
                        <a href={userAccess ? "Perfil/user" : "AccesoUsuario"} className="login">
                            <li className="">
                                <img src={login} alt="" className="imagenperfil" with="50px" height="20px"/>
                                
                                <p>{userAccess ? userlogged.nombre : ""}</p>
                                    
                            
                                
                            </li>
                        </a>
                        <li className="header__link" onClick={finSesion}><a href="/inicio">{userAccess ? "salir" : ""}</a></li>

                    </ul>

                    
                </div>
            </div >
        </div >

    )
    
}
export default Naveg;
//render(<App />, document.getElementById('app'));