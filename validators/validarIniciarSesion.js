export default function validarIniciarSesion(valores) {
    let errores = {};

    //validar el email
    if (!valores.email) {
        errores.email = 'El Email es obligatorio'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = 'Email no valido'
    }

    //validar el password

    if (!valores.password) {
        errores.password = 'El password es obligatorio'
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.password) && valores.password.length < 6) {
        errores.password = 'Password no valido y debe tener 6 caracteres'
    }

    return errores;
}