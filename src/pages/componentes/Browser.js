


function Browsers() {
    return(
        <div className="header_img">

        <h4 className="h4">Buscar oferta de Empleo </h4>

        <form onSubmit={handleSubmit(customSubmit)} className="formulario" data-form>

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
        <hr/>
    </div>
    )
}

export default Browsers;