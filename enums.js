var LoginError;
(function (LoginError) {
    LoginError["NoAutorizado"] = "No Autorizado";
    LoginError["Contrase\u00F1aIncorrecta"] = "Contrase\u00F1a Incorrecta";
    LoginError["UsuarioNoExiste"] = "Usuario No Existe";
    LoginError["Internal"] = "Internal";
})(LoginError || (LoginError = {}));
var printErrorMsg = function (error) {
    if (error == LoginError.NoAutorizado) {
        console.log("No Autorizado");
    }
    else if (error == LoginError.ContraseñaIncorrecta) {
        console.log("Contraseña Incorrecta");
    }
    else if (error == LoginError.UsuarioNoExiste) {
        console.log("Usuario No Existe");
    }
    else if (error == LoginError.Internal) {
        console.log("Internal");
    }
};
printErrorMsg(LoginError.UsuarioNoExiste);
