import React from "react"


const Imagen = (props) => { 
    return (
            <div className="container">
             <img src={ props.imagen } width="200px"></img>
            </div>

    )
}

export default Imagen
