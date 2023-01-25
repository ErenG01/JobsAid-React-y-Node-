import React, { Component, Fragment, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import '../css/inicio.css';
import Filtro from "./componentes/Filtro";
import bonbillaIMG from '../img/inicio/bombilla.png';
import EstadisticasImg from '../img/inicio/estadistica.png'
import trabajadoresIMG from '../img/inicio/icono_trabajadores.png'



function Inicio() {
    
    const {register, handleSubmit, formState: { errors } } = useForm();
    

   

    const[list, setList] = useState([])

    const [showFilter, setShowFilter] = useState(false)

    const [showContent, setContent] = useState(false)

    const customSubmit= (data) =>{
        if (data != '') {
            const infofilter = data;
            const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        console.log(data)
        fetch(`http://localhost:9000/api/browser`, requestInit)
            .then(res => res.json())
            .then(res => setList(res))
            setShowFilter(true)
            setContent(true)

        }else{

            const getList = () =>{
                fetch('http://localhost:9000/api')
                .then(res => res.json())
                .then(res => setList(res))
            }
        }
        
        
    }

    const formSearch = (data) => {
        console.log(data);
    }


    

    useEffect(() =>{
       
       
    },[])

    const [listId, setListId] = useState([]);

    const getVacante = id => {
        fetch(`http://localhost:9000/api/${id}`)
            .then(res => res.json())
            .then(res => setListId(res))

    }

    

    const actionApply = () =>{

        const storage = localStorage.getItem('loggedUsersform')
        const userlocalStorage = JSON.parse(storage)

        if (storage != null) {
            // console.log('no esta vacio')
            // console.log(listId[0].id_vacante)
            // console.log(userId)
            
            const datesApplyOfert = {
                userId: userlocalStorage.Id_usuario,
                vacanteId: listId[0].id_vacante
            }
            
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(datesApplyOfert)
            }

            fetch(`http://localhost:9000/api/applyoferts`, requestInit)
            .then(res => res.json())
            .then(res => alert(res)
                
            ) 
        }else{
            window.location.href = '/AccesoUsuario'
        }


        
    }

    const hijoAPadre= (daticos) =>{
        // console.log(daticos)

        if (daticos != '') {
            
            const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(daticos)
        }
        console.log(daticos)
        fetch(`http://localhost:9000/api/filter`, requestInit)
            .then(res => res.json())
            .then(res => setList(res))
          

        }else{

            const getList = () =>{
                fetch('http://localhost:9000/api')
                .then(res => res.json())
                .then(res => setList(res))
            }
        }
    }

    return (
        
        <div>
            <div className="HeaderAndForm">
                <div className="header_img">


                    <form onSubmit={handleSubmit(customSubmit)} className="formulario" data-form>
                    <h4 className="h4">Buscar oferta de Empleo </h4>

                        <label className="imput" >Cargo o titulo</label>
                        <input
                            {...register('charge')}

                            type="text"
                            placeholder=""
                            resuired
                            data-nombre
                            width="12px"
                            height="12px"
                        />
                        <label className="imput" >Ciudad</label>
                        <input
                            {...register('formcity')}

                            type="text"
                            placeholder=""


                        />

                        <button type="submit" className="btn btn-primary">Buscar oferta</button>


                    </form>
                </div>
            </div>       
           

            <div className="filtro" id="filtro"> 
                {showFilter ? 
                <Filtro hijoAPadre={hijoAPadre} ></Filtro>
                 : ''} 
                      
            </div>



            <div className="ContainerJobs" id="ContainerJobs">


                <main className="MainContainerJob1">





                    

                    {
                        
                    list.map(lista => (
                         
                        <div onClick={() => {getVacante(lista.id_vacante)}} className="MainContainerJob" id="MainContainerJob" key={lista.id_vacante}>
                            <div key={lista.id_vacante}>
                            {/* <h3>{lista.Id_cedula}</h3>
                            <h3>{lista.tipo_documento}</h3> */}
                            {/* <div class="MainContainerJob" id="MainContainerJob" vacantid="${task.id}"> */}
                                {/* <a hfre="#" id="Avancant"> */}
                                    <h4 className="h4">{lista.titulo_vacante}</h4>
                                    <p>{lista.industria}</p>
                                    <p>{lista.LugarEmpleo}</p>
                                    <hr/>
                                        <ul>
                                            <li><p>Salario:{lista.sueldo}</p></li>
                                            <li><p>{lista.descripcion_vacante}</p></li>
                                            <li><p>Horario: lunes a viernes de 7:00am a 5:30pm</p></li>
                                        </ul>
                                        <hr/>

                                            <p>{lista.tipoEmpleo}</p>


                                            <p>publicado hace mas de 30 dias de Bogota,Cundinamarca</p>
                                {/* </a> */}
                                    {/* </div> */}

                            </div>
                        </div>
                    )
                        
                    )}
                    





                </main>


                {listId.map(lista =>
                <aside className="AsideContainerJob1" id="AsideContainerJob1" >

                         
                    <div className="asidecontainervacantes" id="asidecontainervacantes">
                        <h4 className="h4">{lista.titulo_vacante}</h4>

                        <p className="font-weight-bold"></p>
                        <p>{lista.industria}</p>
                        
                        <p>{lista.LugarEmpleo}</p>

                        <button
                            className="btn btn-primary" id="postularse" type="submit">Postularse</button>
                        <button
                            className="btn btn-primary" type="submit">✰</button>
                        <hr />
                        <p>{lista.descripcion_vacante}</p>
                        
                        <hr />
                        <p>¿Que te ofrecemos?</p>
                        <br />
                        <h4 className="font-weight-bold">Salario:{lista.sueldo}</h4>
                        <br />
                        <h4 className="font-weight-bold">Horarios:{lista.tipoEmpleo}</h4>
                        <br />
                        <h4 className="font-weight-bold">lugar{lista.LugarEmpleo}</h4>
                        <br />
                        <p>Si te encuentras interesado y cumples con el perfil, postúlate!</p>
                        <hr />

                        <button
                            onClick={actionApply}
                            className="btn btn-primary" id="postularse" type="submit">Postularse al empleo</button>

                    </div>
                

                </aside>
                )} 
            </div>

            {showContent ? 
                
                '' :  
            <div className="SectionArticles">
                
                    

                    <div className="Article1">
                       
                        <img src={bonbillaIMG}></img>
                        <p>La rapidez es otra de las características cuando buscamos trabajo por internet. </p>
                    </div>

                    <div className="Article2">
                        
                        <img src={trabajadoresIMG}></img>
                        <p>la facilidad para encontrar trabajo. Es lógico; a cuantas más ofertas puedas aplicar</p>
                    </div>

                    <div className="Article3">
                        
                        <img src={EstadisticasImg}></img>
                        <p>puedes ahorrarte ese posible inconveniente y buscar y aplicar a las ofertas desde tu propia casa.</p>
                    </div>

            </div>
            } 
                    <footer className="" id="footers">

                        <script src="footer.js"> </script>

                    </footer>


                    <div id="usarioscontent">

                        
                    </div>    




            
            
        </div>      
    )
}

export default Inicio;