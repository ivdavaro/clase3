import React from "react"
import Imagen from "./Imagen"

const Comentario = (props)=>{
    
    
    return (
        <div className="container">
            <div className="row">                
                <div>
                    <Imagen imagen={ props.com.rutaImagen }/>
                </div>
                <div>
                    <h2>{props.com.nombre}</h2>
                </div>
                <div>
                    <p>{props.com.comentario}</p>
                </div>
            </div>
        </div>
    )
}

export default Comentario