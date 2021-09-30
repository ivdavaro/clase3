import React from "react"
import { useState } from "react/cjs/react.development"
import Productos from "./producto"
import Proveedores from "./proveedor"


const Principal = () => {

    const [isProducto,setIsProducto] = useState(false)
    const [isProveedor,setIsProveedor] = useState(false)

    const mostrarProductos = () =>{
        setIsProducto(true)
        setIsProveedor(false)
    }

    const mostrarProveedores = () =>{
        setIsProducto(false)
        setIsProveedor(true)
    }

    return (
        <div className = "container">
            
            <button type="button" class="btn btn-secondary" value="proveedor" onClick={ () => mostrarProveedores() } >Proveedor</button>
            <button type="button" class="btn btn-secondary" value="producto" onClick={ () => mostrarProductos() } >Producto</button>
            { isProducto ? <Productos/> : null }
            { isProveedor ? <Proveedores/> : null }
        </div>
    )
}

export default Principal