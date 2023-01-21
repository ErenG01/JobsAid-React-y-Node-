import React, {useEffect} from "react";





function Curriculum() {

// useEffect(()=>{
    
//     const addcurriculum = () => {
//         console.log('hola')
//         // document.createElement("embed", {src: "../../img/uploads/hola.pdf"})
//         const div = `<img src="img/uploads/imgPerfil.png"></img>`
//         document.getElementById("minicontainerCV").innerHTML= div
//         const img = `<embed id="embed" src="../src/img/uploads/hola.pdf" type="" width="700" height="600" />`
//         // ../src/img/uploads/hola.pdf
//     }
//     addcurriculum()
    
// }, [])    



    return(
        <>
            <div className="containerElements">
                <div className="minicontainerUpCV">
                    <h1>actualizar o subir CV</h1>
                    <input type="file" name="upCV" id="upCV" />
                    <button className="btn btn-primary" id="enviaCV" name="enviaCV" type="submit">subir CV</button>
                </div>
                <div className="minicontainerCV" id="minicontainerCV">
                    {/* <img src={"../src/img/uploads/hola.pdf"}></img> */}
                    <embed id="embed" src={"../imagenes/hola.pdf"} type="" width="700" height="600" />
                </div>
            </div>
        
        </>
    )
    
}

export default Curriculum;