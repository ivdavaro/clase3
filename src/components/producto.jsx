import React, { useState } from "react";
import { nanoid } from "nanoid";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [valor, setValor] = useState(0);  
  const producto = [];
  const [productos, setProductos] = useState(producto);

  //variables para valdar formulario
  let [valido, setValido] = useState(true);
  let [errNombre, setErrNombre] = useState("");
  let [errDescripcion, setErrDescripcion] = useState("");
  let [errCantidad, setErrCantidad] = useState("");
  let [errValor, setErrValor] = useState("");

  const agregarProducto = (e) => {
    e.preventDefault();
    validarFormulario();
    if (valido) {
      setProductos(...productos, {
        id: nanoid(),
        nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
        valor: valor,
      });
      setNombre("")
      setDescripcion("")
      setCantidad(0)
      setValor(0)
      console.log(productos);
    }
  };

  const validarFormulario = () => {
    if ( nombre.trim() === '' ) {
      setErrNombre("Debe ingresar el nombre")
      valido = false;
    }else{
      setErrNombre("")
    }
    if ( descripcion.trim() === '' ) {
      setErrDescripcion("Debe ingresar la descripción")
      valido = false;
    }else{
      setErrValor("")
    }
    if ( cantidad === 0 ) {
      setErrCantidad("Debe ingresar la cantidad")
      valido = false;
    }else{
      setErrCantidad("")
    }
    if ( valor === 0 ) {
      setErrValor("Debe ingresar el valor")
      valido = false;
    }else{
      setErrValor("")
    }
    setValido(valido);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Taller Crud React</h1>
        <p>Productos</p>
      </div>

      <div className="row">
        <div className="col-sm-4 border-column">
          <h3>Formulario</h3>
          <form onSubmit={agregarProducto}>
            { errNombre === '' ? null : <span>{errNombre}</span> }
            <input
              type="text"
              placeholder="Nombre del producto"
              className="form-control mb-2"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            { errDescripcion === '' ? null : <span>{errDescripcion}</span> }
            <input
              type="text"
              placeholder="Descripción"
              className="form-control mb-2"
              onChange={(e) => setDescripcion(e.target.value)}
            />
            { errCantidad === '' ? null : <span>{errCantidad}</span> }
            <input
              type="number"
              placeholder="Cantidad"
              className="form-control mb-2"
              onChange={(e) => setCantidad(e.target.value)}
            />
            { errValor === '' ? null : <span>{errValor}</span> }
            <input
              type="text"
              placeholder="Valor"
              className="form-control mb-2"
              onChange={(e) => setValor(e.target.value)}
            />            
            <button type="submit" className="btn btn-primary mb-2 btn-block">
              Enviar
            </button>
          </form>
        </div>
        <div className="col-sm-8 border-column">
          <h3>Lista de productos</h3>

          <ul className="list-group">
            {
              productos.map(

                (item) => (

                  <li className="list-group-item" key={item.id}>

                    <div>

                      <h2>{item.nombre}</h2>

                      <h2>{item.descripcion}</h2>

                      <h2>{item.cantidad}</h2>

                      <h2>{item.valor}</h2>

                    </div>

                    <button className="btn btn-sm btn-warning mx-2">Editar</button>

                    <button className="btn btn-sm btn-danger">Eliminar</button>

                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Formulario;
