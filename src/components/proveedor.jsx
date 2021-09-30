import React, { useState } from "react"
import { nanoid } from "nanoid"

const Proveedores = () => {

    const [proveedores, setProveedores] = useState([])

    const [nombreEmpresa, setNombreEmpresa] = useState("")
    const [nombreContacto, setNombreContacto] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState("")
    const [id, setId] = useState("")

    const [errNombreEmpresa, setErrNombreEmpresa] = useState("")
    const [errNombreContacto, setErrNombreContacto] = useState("")
    const [errTelefono, setErrTelefono] = useState("")
    const [errDireccion, setErrDireccion] = useState("")
    const [errCiudad, setErrCiudad] = useState("")
    const [errPais, setErrPais] = useState("")

    let [isEdit, setIsEdit] = useState(false)

    const agregarProveedor = e =>{
        e.preventDefault()

        if( !nombreEmpresa.trim() ){
            setErrNombreEmpresa('El campo nombre empresa no puede estar vacio')
        }
        else if( !nombreContacto.trim() ){
            setErrNombreContacto('El campo nombre contacto no puede estar vacio')
        }
        else if( telefono === 0 ){
            setErrTelefono('El campo teléfono no puede estar vacio')
        }
        else if( !direccion.trim() ){
            setErrDireccion('El campo dirección no puede estar vacio')
        }
        else if( !ciudad.trim() ){
            setErrCiudad('El campo ciudad no puede estar vacio')
        }
        else if( !pais.trim() ){
            setErrPais('El campo país no puede estar vacio')
        }else{

            setProveedores(
                [
                    ...proveedores,
                    {
                        id: nanoid(),
                        nombreEmpresa: nombreEmpresa,
                        nombreContacto: nombreContacto,
                        telefono:telefono,
                        direccion: direccion,
                        ciudad: ciudad,
                        pais:pais
                        
                    }
                ]
            )

            setNombreEmpresa('')
            setNombreContacto('')
            setTelefono('')
            setDireccion('')
            setCiudad('')
            setPais('')
        } 
    }

    const eliminarProveedor = (id) => {
        const proveedorFiltro = proveedores.filter( item => item.id !== id )
        setProveedores(proveedorFiltro)
    }

    const editarProveedor = (item) => {
        setIsEdit(true)
        setNombreEmpresa(item.nombreEmpresa)
        setNombreContacto(item.nombreContacto)
        setTelefono(item.telefono)
        setDireccion(item.direccion)
        setCiudad(item.ciudad)
        setPais(item.pais)
        setId(item.id)
    }

    const actualizarProveedor = e => {
        e.preventDefault()
        let proveedorActualizado = {
            id: id,
            nombreEmpresa: nombreEmpresa,
            nombreContacto: nombreContacto,
            telefono:telefono,
            direccion: direccion,
            ciudad: ciudad,
            pais:pais
        }

        let proveedoresActualizados = proveedores.map( item => (item.id === id) ? proveedorActualizado :  item  )
        setProveedores(proveedoresActualizados)
        setNombreEmpresa('')
        setNombreContacto('')
        setTelefono('')
        setDireccion('')
        setCiudad('')
        setPais('')
        setId('')
        setIsEdit(false)
    }


    return (
        <div className="container">

            <div className="row text-center back-header">
                <h1 className="animate__animated animate__backInUp"> <b> TALLER CRUD</b></h1>
                <h2> <b> Proveedores </b> </h2>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <br />
                    <h3><b>Formulario</b></h3>
                    <form onSubmit= { isEdit ? actualizarProveedor : agregarProveedor } >

                        <div className="form-group">
                            <label>Nombre empresa:</label>
                            <input
                                type="text"
                                placeholder="Nombre del proveedor"
                                className="form-control mb-2"
                                onChange={e => setNombreEmpresa(e.target.value)}
                                value={nombreEmpresa}
                            />
                            {errNombreEmpresa ? <small className="text-danger">{errNombreEmpresa}</small> : null}
                        </div>
                        <div className="form-group">
                            <label>Nombre Contacto:</label>
                            <input
                                type="text"
                                placeholder="Nombre de contacto"
                                className="form-control mb-2"
                                onChange={e => setNombreContacto(e.target.value)}
                                value={nombreContacto}
                            />
                            {errNombreContacto ? <small className="text-danger">{errNombreContacto}</small> : null}
                        </div>
                        <div className="form-group">
                            <label>Telefono:</label>
                            <input
                                type="number"
                                placeholder="Teléfono"
                                className="form-control mb-2"
                                onChange={(e) => setTelefono(e.target.value)}
                                value={telefono}
                            />
                            {errTelefono ? <small className="text-danger">{errTelefono}</small> : null}

                        </div>
                        <div className="form-group">
                            <label>Dirección:</label>
                            <input
                                type="text"
                                placeholder="Dirección"
                                className="form-control mb-2"
                                onChange={e => setDireccion(e.target.value)}
                                value={direccion}
                            />
                            {errDireccion ? <small className="text-danger">{errDireccion}</small> : null}
                        </div>
                        <div className="form-group">
                            <label>Ciudad:</label>
                            <input
                                type="text"
                                placeholder="Ciudad"
                                className="form-control mb-2"
                                onChange={e => setCiudad(e.target.value)}
                                value={ciudad}
                            />
                            {errCiudad ? <small className="text-danger">{errCiudad}</small> : null}
                        </div>
                        <div className="form-group">
                            <label>País:</label>
                            <input
                                type="text"
                                placeholder="País"
                                className="form-control mb-2"
                                onChange={e => setPais(e.target.value)}
                                value={pais}
                            />
                            {errPais ? <small className="text-danger">{errPais}</small> : null}

                        </div>
                        <button type="submit" className="btn btn-dark" > { isEdit ? "Actualizar" : "Enviar" }  </button>
                    </form>
                </div>

                <div className="col-sm-8">
                    <br/>
                    <h3><b>Lista de proveedores</b></h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nombre empresa</th>
                                <th scope="col">Nombre Contacto</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Ciudad</th>
                                <th scope="col">País</th>
                            </tr>
                        </thead>
                        <tbody>

                        {

                            proveedores.length === 0 ? (<thead className="list-group-item">Sin proveedores</thead>) : 
                            (
                                proveedores.map(
                                    (item) => (
                                        <tr className="animate__animated animate__bounceInDown" key={item.id}> 

                                                <td>{ item.nombreEmpresa}</td>
                                                <td>{ item.nombreContacto}</td>
                                                <td>{ item.telefono}</td>
                                                <td>{ item.direccion}</td>
                                                <td>{ item.ciudad}</td>
                                                <td>{ item.pais}</td>
                                            <td>
                                                <div align="right">
                                                    <button className="btn btn-sm btn-success mx-2" onClick={ () => editarProveedor(item) }> <i className='fas fa-edit'></i> </button>
                                                    <button className="btn btn-sm btn-info" onClick={ () => eliminarProveedor(item.id) } > <i className="fa fa-remove"></i> </button>
                                                </div>
                                            </td>
                                        </tr>
    
                                    )
                                )

                            )
                            
                        }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    )



}

export default Proveedores
