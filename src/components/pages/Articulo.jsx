import React, { useEffect, useState } from "react";
import { Sidebar } from "../layouts/Sidebar";
import '../../sass/articulos.scss';
import { Link, useParams } from "react-router-dom";
import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";
import { Listado } from "./Listado";
import Imagen from "../../../public/images/img.jpg";

export const Articulo = () => {
  
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    let {datos, cargando} = await Peticion(Global.url+"articulo/" + params.id, "GET");
    if(datos.status === "success"){
      setArticulo(datos.articulo);
     
    }
    setCargando(false);
  };
  return (
    <>
      <div className="articulos">
        <div className="articulos__container">
          {cargando ? (
            <div className="articulos__container-cargar">
              <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
            </div>
          ) : (
            <>
            <div>
            {articulo.imagen != "default.png" && <img className="articulos__container-content-img" src={Global.url + "imagen/" + articulo.imagen} />}
          {articulo.imagen === "default.png" && <img className="articulos__container-content-img" src={Imagen} />}
            </div>
             <h1>{articulo.titulo}</h1>
             <p>{articulo.contenido}</p>
             <p>{articulo.fecha}</p>
            </>
          )}
        </div>
        <Sidebar />
      </div>
    </>
  );
};
