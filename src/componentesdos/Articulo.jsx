import React from "react"
import Comentario from "./Comentario"

const Articulo = () => {


    const comentarios = 
        {
          nombre:"Ivan",
          comentario: "It is a long established fact that a reader will be distracted by the readable content of a ",
          rutaImagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfCKmMJ1PCYcqjbjDljx3k7ODHzJwCYCHTg&usqp=CAU"
        }
      

    return (

        <div className="container">
        <div>
            <h2>
            Lorem Ipsum is simply dummy text of the p
            </h2>
        </div>
        <div>
            <Comentario com = { comentarios }></Comentario>
        </div>
        </div>
        
        
    )

}

export default Articulo