import React, { useEffect, useState } from "react";
import { Sidebar } from "../layouts/Sidebar";
import '../../sass/articulos.scss';
import { Link } from "react-router-dom";
import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";
import { Listado } from "./Listado";

export const Articulos = () => {
  
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    listar();
  //   let data = [{
  //     _id: 1,
  //     titulo: "titulo 1",
  //     contenido: "contenido"
  //   },
  //   {
  //     _id: 2,
  //     titulo: "titulo 2",
  //     contenido: "contenido"
  //   }
  // ]
  // setArticulos(data)
  // setCargando(false);
  }, []);

  const listar = async () => {
    let {datos, cargando} = await Peticion(Global.url+"articulos", "GET");
    //  const url = Global.url+"articulos";

    // let peticion = await fetch(url, {
    //   method: 'GET'
    // });
    // let datos = await peticion.json();

    if(datos.status === "success"){
      setArticulos(datos.articulo);
     
    }
    //setArticulos([]);
    // setArticulos(res.data.articulo);
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
              {articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos}/> : (
                <div className="articulos__container-vacio">
                  <h1 className="articulos__container-vacio-title">
                    Ningun Articulo Guardado
                  </h1>
                  <button className="articulos__container-vacio-btn">
                    <Link to={"/crear"}>Crear Articulo</Link>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <Sidebar />
      </div>
    </>
  );
};
