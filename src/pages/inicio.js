import React, { Component, Fragment, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import '../css/inicio.css';


function Inicio() {
    
    const {register, handleSubmit, formState: { errors } } = useForm();
    

   

    const[list, setList] = useState([])

    const [showFilter, setShowFilter] = useState(false)

    const customSubmit= (data) =>{
        if (data != '') {
            const infofilter = data;
            const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        console.log(data)
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

    const filtro = (city, minsalary, maxsalary, typejob, modality) =>{
        const ruta = 'http://localhost:9000/api/'

        // if (city != '' ){
        //     ruta += " and LugarEmpleo = '".$_POST['city']+"' ";
        //   }
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

    return (
        
        <div>
            
            
           

            <div className="filtro" id="filtro"> 
                {/* {showFilter ?  */}
                
                {/* : ''}   */}
                      
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
            
                    <footer className="" id="footers">

                        <script src="footer.js"> </script>

                    </footer>


                    <div id="usarioscontent">

                        
                    </div>    




            
            
        </div>      
    )
}

export default Inicio;