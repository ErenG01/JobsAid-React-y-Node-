import { useForm } from 'react-hook-form';
import React,{useState}  from 'react';

function Filtro({hijoAPadre}) {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const[datos, setdatos] = useState([])

    

    const formFilter = (data) =>{
      
       hijoAPadre(data)
        
        
    }

   


    return(
        <>
        
        <div className="col-11">

          
                  
                    <form onSubmit={handleSubmit(formFilter)}>
                        <table className="table">
                            <thead>
                                <tr className="filters">

                                    <th>
                                        Ciudad
                                        <select {...register('city')} className="form-control mt-2" >

                                            <option value=""></option>
                                            <option value="Amazonas">Amazonas</option>
                                            <option value="Antioquia">Antioquia</option>
                                            <option value="Arauca">Arauca</option>
                                            <option value="Archipielago de san Andres">Archipielago de san Andres</option>
                                            <option value="Atlantico">Atlantico</option>
                                            <option value="Bogota D.C">Bogota D.C</option>
                                            <option value="Bolivar">Bolivar</option>
                                            <option value="Boyacá">Boyacá</option>
                                            <option value="Caldas">Caldas</option>
                                            <option value="Caquetá">Caquetá</option>
                                            <option value="Casanare">Casanare</option>
                                            <option value="Cauca">Cauca</option>
                                            <option value="Cesar">Cesar</option>
                                            <option value="Chocó">Chocó</option>
                                            <option value="Córdoba">Córdoba</option>
                                            <option value="Cundinamarca">Cundinamarca</option>
                                            <option value="Guainía">Guainía</option>
                                            <option value="Guaviare">Guaviare</option>
                                            <option value="Huila">Huila</option>
                                            <option value="La Guajira">La Guajira</option>
                                            <option value="Magdalena">Magdalena</option>
                                            <option value="Nariño">Nariño</option>
                                            <option value="Norte de Santander">Norte de Santander</option>
                                            <option value="Putumayo">Putumayo</option>
                                            <option value="Quindío">Quindío</option>
                                            <option value="Sucre">Sucre</option>
                                            <option value="Tolima">Tolima</option>
                                            <option value="Valle del Cauca">Valle del Cauca</option>
                                            <option value="Vaupés">Vaupés</option>
                                            <option value="Vichada">Vichada</option>

                                        </select>
                                    </th>
                                    <th>
                                        Salario desde:
                                        <input type="text" {...register('minimunsalary')} className="form-control mt-2" />
                                    </th>
                                    <th>
                                        Salario hasta:
                                        <input type="text" {...register('maximumsalary')} className="form-control mt-2" />
                                    </th>
                                    <th>
                                        Tipo de empleo
                                        <select {...register('typejob')} className="form-control mt-2" >

                                            <option value=""></option>
                                            <option value="tiempo Completo">tiempo Completo</option>
                                            <option value="Indefinido">Indefinido</option>
                                            <option value="Medio Tiempo">Medio Tiempo</option>
                                            <option value="Temporal">Temporal</option>
                                            <option value="Contrato">Contrato</option>
                                        </select>
                                    </th>


                                    <th>
                                        modalidad
                                        <select {...register('modality')} className="form-control mt-2" >

                                            <option value=""></option>
                                            <option value="Presencial">Presencial</option>
                                            <option value="Virtual">Virtual</option>
                                            <option value="Hibrido">Hibirido</option>
                                        </select>
                                        

                                    </th>
                                    
                                </tr>
                                
                            </thead>
                            
                        </table>
                        <button type="submit" className="btn btn-primary">ver</button>
                    </form>                              
                  

          
          {/* <input type="submit" id="btnFiltroVer" className="btn btn-primary" value="Ver" /> */}

                
    </div>
    
  </>      
    )
}

export default Filtro;