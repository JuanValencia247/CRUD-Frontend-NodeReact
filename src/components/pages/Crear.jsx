import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";
import '../../sass/crear.scss';

export const Crear = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");

  // const navegar = useNavigate()

  const guardarArticulo = async (e) => {
    e.preventDefault();

    // Recoger datos del formulario
    let nuevoArticulo = formulario;

    //Guardar articulo en la BD
    const { datos} = await Peticion(Global.url + "articulo", "POST", nuevoArticulo);

    if(datos.status === 'success'){
      setResultado("guardado");
    }else{
      setResultado("error")
    }

    //Subir imagen
    const fileInput = document.querySelector('#file')

    if (datos.status === "success" && fileInput.files[0]) {
        setResultado("guardado");

        //Subir imagen
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);
        
        const subida = await Peticion(Global.url+"imagen/"+datos.articulo._id, "POST", formData, true);
        
        if(subida.datos.status === 'success'){
          setResultado("guardado");
        }else{
          setResultado("error")
        }

      // navegar('/')
    } 
  }

  //Subir imagen
  // const fileInput = document.querySelector('#file')
  // const formData = new FormData();
  // formData.append('file0', fileInput.files[0]);

  // console.log((fileInput.files));
  // console.log(formData);
  // navegar('/articulos')


  return (
    <div className='crear'>



      <form onSubmit={guardarArticulo} className='crear__container'>
        <div className='crear__container-header'>Crear Articulo</div>
        <div className='crear__container-body'>
          <div className="crear__mensaje">
            <strong className="crear__mensaje-exito">{resultado == "guardado" ? "Articulo guardado con exito! " : ""}</strong>
            <strong className="crear__mensaje-error">{resultado == "error" ? "Los datos proporcionados son incorreectos..." : ""}</strong>
          </div>
          <div className='crear__container-body-titulo'>
            <label className='crear__container-body-label' htmlFor="titulo">Titulo</label>
            <input className='crear__container-body-input' type="text" onChange={cambiado} name='titulo' placeholder='Ingrese el titulo' />
          </div>
          <div className='crear__container-body-contenido'>
            <label className='crear__container-body-label' htmlFor="contenido">Contenido</label>
            <textarea className='crear__container-body-input' type="text" onChange={cambiado} name='contenido' placeholder='Ingrese el contenido' />
          </div>
          <div className='crear__container-body-imagen'>
            <label className='crear__container-body-label' htmlFor="Imgane">Imagen</label>
            <input className='crear__container-body-imagen-input' type="file" name='file0' id='file' />
          </div>
          <button className='crear__container-body-btn'>Guardar</button>
        </div>
      </form>
    </div>
  )
}
