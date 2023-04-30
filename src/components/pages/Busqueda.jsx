import React, { useEffect, useState } from "react";
import { Sidebar } from "../layouts/Sidebar";
import '../../sass/articulos.scss';
import { Link, useParams } from "react-router-dom";
import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";
import { Listado } from "./Listado";

export const Busqueda = () => {
  
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    listar();
  }, []);

  useEffect(() => {
    listar();
  }, [params]);

  const listar = async () => {
    const {datos, cargando} = await Peticion(Global.url+"buscar/"+params.busqueda, "GET");

    if(datos.status === "success"){
      setArticulos(datos.articulo);
     
    }else{
      setArticulos([]);
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
              {articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos}/> : (
                <div className="articulos__container-vacio">
                  <h1 className="articulos__container-vacio-title">
                    Ningun Articulo Guardado
                  </h1>

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
