import './css/App.css';
import Naveg from './pages/Naveg.js';
import Inicio from './pages/inicio.js';
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import PublicarOferta from './pages/publicarOferta.js';
import InicioSesion from './pages/InicioSesion.js';
import Perfil from './pages/Perfil';
import EditDates from './pages/componentes/EditDates';
import PerfilUSer from './pages/componentes/PerfilUser';
import Postulation from './pages/componentes/Postulation';
import EmailBox from './pages/componentes/EmailBox';
import Curriculum from './pages/componentes/Curriculum';
import Settings from './pages/componentes/Settings';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Naveg></Naveg>
        <Routes>
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/AccesoUsuario' element={<InicioSesion/>} />
        <Route path='/publicarOferta' element={<PublicarOferta/>} />
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/perfil/Editdates' element={<div className='PerfilComponent'><Perfil/><EditDates/></div>} />
        <Route path='/perfil/user' element={<div className='PerfilComponent'><Perfil/><PerfilUSer/></div>} />
        <Route path='/perfil/Postulations' element={<div className='PerfilComponent'><Perfil/><Postulation/></div>} />
        <Route path='/perfil/Emailbox' element={<div className='PerfilComponent'><Perfil/><EmailBox/></div>} />
        <Route path='/perfil/Curriculum' element={<div className='PerfilComponent'><Perfil/><Curriculum/></div>} />
        <Route path='/perfil/Settings' element={<div className='PerfilComponent'><Perfil/><Settings/></div>} />

        
        </Routes>
        
        <Routes>
        

        </Routes>
      </BrowserRouter>
      
      
      
   
    </div>
  );
}

export default App;
