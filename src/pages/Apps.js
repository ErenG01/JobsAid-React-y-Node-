import React from "react";
import { Router, Switch, Route,  } from "react-router-dom";

import Naveg  from "./Naveg.js";
import Inicio from "./inicio.js";
import publicarOferta from "./publicarOferta.js";



function Apps() {
    return(
        
     <div>
          
     <h1>CA ES React</h1>
     <Naveg></Naveg>
     <Inicio></Inicio>
    </div>
    
    )
}

export default Apps;