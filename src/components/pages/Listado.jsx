import React from 'react'
import Imagen from "../../../public/images/img.jpg";
import { Global } from '../helpers/Global';
import { Peticion } from '../helpers/Peticion';
import { Link } from 'react-router-dom';
export const Listado = ({ articulos, setArticulos }) => {

  //Eliminar articulos
  const eliminarArticulo = async (id) => {
    let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE");

    if (datos.status === "success") {
      let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
      setArticulos(articulosActualizados);
    }
  }
  return (
    articulos.map((a) => (
      <div className="articulos__container-blog" key={a._id}>
        <h2 className="articulos__container-title"><Link to={'/articulo/'+a._id}>{a.titulo}</Link></h2>
        <div className="articulos__container-content">

          {a.imagen != "default.png" && <img className="articulos__container-content-img" src={Global.url + "imagen/" + a.imagen} />}
          {a.imagen === "default.png" && <img className="articulos__container-content-img" src={Imagen} />}

          <div className='articulos__container-content-div'>
            <p className="articulos__container-content-description">
              {a.contenido}
            </p>
            <div className='articulos__container-content-btn'>
              <Link to={'/editar/'+ a._id} className='articulos__container-content-btn-editar'>Editar</Link>
              <button className='articulos__container-content-btn-eliminar' 
              onClick={() => {
                eliminarArticulo(a._id)
              }}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}
