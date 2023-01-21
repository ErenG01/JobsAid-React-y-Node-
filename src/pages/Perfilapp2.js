import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Userperfil from "./componentes/Userpefil.js";
import Perfil from "./Perfil";

import React from "react";

function Perfilapp2() {
    return(
        <div>
        <Perfil></Perfil>   
        <BrowserRouter>
        
        <Routes>
        <Route path='/perfil' element={<Perfil/>} />
        
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Perfilapp2;