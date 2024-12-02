

enum LoginError {
    NoAutorizado = "No Autorizado",
    ContraseñaIncorrecta = "Contraseña Incorrecta",
    UsuarioNoExiste = "Usuario No Existe",
    Internal = "Internal",
}


const printErrorMsg = (error: LoginError) => {
    if (error == LoginError.NoAutorizado) {
        console.log("No Autorizado");
    } else if (error == LoginError.ContraseñaIncorrecta) {
        console.log("Contraseña Incorrecta");
    } else if (error == LoginError.UsuarioNoExiste) {
        console.log("Usuario No Existe");
    } else if (error == LoginError.Internal) {
        console.log("Internal");
    }
};

printErrorMsg(LoginError.UsuarioNoExiste)