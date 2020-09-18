export default function validarCrearCuenta(valores) {
    let errores = {};

    //validar el nombre del usuario
    if (!valores.nombre) {
        errores.nombre = 'El nombre es obligatorio'
    }
    //validar el empresa
    if(!valores.empresa){
        errores.empresa = ' Nombre de empresa es obligatorio'
    }

    // validar url
    if(!valores.url){
        errores.url = 'La URL del producto es obligatoria'
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errores.url = 'URL mal formaterada o no valida'
    }

    // validar descripcion
    if(!valores.descripcion){
        errores.descripcion = 'Agregar una descripcion de tu producto'
    }


    return errores;
}