import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Productos = () => {

    const [productos, setProductos] = useState([])

    const [ nombre, setNombre ] = useState("")
    const [ descripcion, setDescripcion ] = useState("")
    const [ cantidad, setCantidad] = useState(0)
    const [ valor, setValor ] =useState(0)
    const [ id, setId ] =useState("")
    

    const [errNombre, setErrNombre] = useState(null)
    const [errDescripcion, setErrDescripcion] = useState(null)
    const [errCantidad, setErrCantidad] = useState(null)
    const [errValor, setErrValor] = useState(null)

    let [isEdit, setIsEdit] = useState(false)

    const agregarProducto = e =>{
        e.preventDefault()

        if( !nombre.trim()){
            setErrNombre('El campo nombre no puede estar vacio')
        }
        else if( !descripcion.trim()){
            setErrDescripcion('El campo nombre no puede estar vacio')
        }
        else if( cantidad === 0){
            setErrCantidad('El campo nombre no puede estar vacio')
        }
        else if( valor=== 0){
            setErrValor('El campo nombre no puede estar vacio')
        }else{

            setProductos(
                [
                    ...productos,
                    {
                        id: nanoid(),
                        nombre: nombre,
                        descripcion: descripcion,
                        cantidad:cantidad,
                        valor: valor
                    }
                ]
            )
            setNombre('')
            setDescripcion('')
            setCantidad('')
            setValor('')
        } 
    }

    const eliminarProducto = (id) => {
        const productoFiltro = productos.filter( item => item.id !== id )
        setProductos(productoFiltro)
    }

    const editarProducto = (item) => {
        setIsEdit(true)
        setNombre(item.nombre)
        setDescripcion(item.descripcion)
        setCantidad(item.cantidad)
        setValor(item.valor)   
        setId(item.id)
    }

    const actualizarProducto = () => {
        let productoActualizado = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            cantidad:cantidad,
            valor: valor
        }

        let productosActualizados = productos.map( item => (item.id === id) ? productoActualizado :  item  )
        setProductos(productosActualizados)

        setNombre('')
        setDescripcion('')
        setCantidad(0)
        setValor(0)
        setId('')
    }


    return (

        <div className="container">

            <div className="row text-center back-header">
                <h1 className="animate__animated animate__backInUp"> <b> TALLER CRUD REACT</b></h1>
                <h2> <b> Productos </b> </h2>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <br/>
                    <h3><b>Formulario</b></h3>
                    <form onSubmit={ isEdit ? actualizarProducto : agregarProducto }>
                        
                        <div className="form-group">
                        <label>Nombre producto:</label>
                        <input
                            type="text"
                            placeholder="Nombre del produto"
                            className="form-control mb-2" 
                            onChange={ e => setNombre( e.target.value) }
                            value={nombre}
                        />
                        { errNombre ? <small className="text-danger">{errNombre}</small>: null }
                        </div>
                        <div className="form-group">
                            <label>Descripción:</label>
                            <input
                                type="text"
                                placeholder="Descripción"
                                className="form-control mb-2"
                                onChange={ e => setDescripcion( e.target.value) }
                                value={descripcion} 
                            />
                            { errDescripcion ? <small className="text-danger">{errDescripcion}</small>: null }
                        </div>
                        <div className="form-group">
                            <label>Cantidad:</label>
                            <input
                                type="number"
                                placeholder="Cantidad"
                                className="form-control mb-2"
                                onChange={ (e) => setCantidad( e.target.value) } 
                                value={cantidad}
                            />
                            { errCantidad ? <small className="text-danger">{errCantidad}</small>: null }

                        </div>
                        <div className="form-group">
                            <label>Valor:</label>
                            <input
                                type="number"
                                placeholder="Valor"
                                className="form-control mb-2" 
                                onChange={ e => setValor( e.target.value ) }
                                value={valor}
                            />
                            { errValor ? <small className="text-danger">{errValor}</small>: null }

                        </div>
                        <button type="submit" className="btn btn-dark" >{isEdit ? "Editar":"Enviar"}</button>
                    </form>


                </div>
                <div className="col-sm-8">
                    <br/>
                    <h3><b>Lista de productos</b></h3>

                    <ul className="list-group">
                        {

                            productos.length === 0 ? (<li className="list-group-item">Sin productos</li>) : 
                            (
                                productos.map(
                                    (item) => (
                                        <li className="list-group-item mb-2 animate__animated animate__bounceInLeft" key={item.id}> 
                                            <div>
                                                <h4>{ item.nombre}</h4>
                                                <h5>{ item.descripcion}</h5>
                                                <h6>Cantidad: { item.cantidad}</h6>
                                                <h6>Valor: { item.valor}</h6>
                                            </div>
                                            <div align="right">
                                                <button className="btn btn-sm btn-success mx-2" onClick={ () => editarProducto(item) }> Editar </button>
                                                <button className="btn btn-sm btn-info" onClick={ () => eliminarProducto(item.id) } > Eliminar </button>
                                            </div>
                                        </li>
    
                                    )
                                )

                            )
                            
                        }


                    </ul>

                   
                </div>

            </div>

        </div>

        
        
    )
}

export default Productos
