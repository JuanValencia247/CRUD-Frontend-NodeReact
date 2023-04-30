export const Peticion = async (url, metodo, datosGuardar = '', archivo = false) => {

    let cargando = true;

    let opciones = {
        method: "GET"
    };

    if (metodo == 'GET' || metodo == 'DELETE') {
        opciones = {
            method: metodo
        };
    }

    if (metodo == 'POST' || metodo == 'PUT') {
        //Guardar imagen
        let body = JSON.stringify(datosGuardar);

        if (archivo) {
            opciones = {
                method: metodo,
                body: datosGuardar
            };
        } else {
            // Guardar datos
            opciones = {
                method: metodo,
                body: JSON.stringify(datosGuardar),
                headers: {
                    'Content-type': 'application/json'
                }
            };
        }
    }

    const peticion = await fetch(url, opciones);
    const datos = await peticion.json();

    cargando = false;

    return {
        datos,
        cargando
    }
}
