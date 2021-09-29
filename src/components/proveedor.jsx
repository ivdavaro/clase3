import Reac, { useState } from "react"
import { nanoid } from "nanoid"

const Proveedores = () => {

    const [proveedores, setProveedores] = useState([])

    const [nombreEmpresa, setNombreEmpresa] = useState("")
    const [nombreContacto, setNombreContacto] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState("")

    const [errNombreEmpresa, setErrNombreEmpresa] = useState("")
    const [errNombreContacto, setErrNombreContacto] = useState("")
    const [errTelefono, setErrTelefono] = useState("")
    const [errDireccion, setErrDireccion] = useState("")
    const [errCiudad, setErrCiudad] = useState("")
    const [errPais, setErrPais] = useState("")

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
                    <form>

                        <div className="form-group">
                            <label>Nombre empresa:</label>
                            <input
                                type="text"
                                placeholder="Nombre del produto"
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
                                placeholder="Descripción"
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
                                value={ciudad}
                            />
                            {errPais ? <small className="text-danger">{errPais}</small> : null}

                        </div>
                        <button type="submit" className="btn btn-dark" >Enviar</button>
                    </form>


                </div>

            </div>

        </div>

    )



}

export default Proveedores
