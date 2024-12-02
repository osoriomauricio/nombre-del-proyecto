var Contenedor = /** @class */ (function () {
    function Contenedor() {
        this.contenido = [];
    }
    Contenedor.prototype.añadir = function (item) {
        this.contenido.push(item);
    };
    Contenedor.prototype.getItem = function (id) {
        return this.contenido[id];
    };
    return Contenedor;
}());
var nombreUsuario = new Contenedor();
nombreUsuario.añadir("Juan");
nombreUsuario.añadir("Pedro");
console.log(nombreUsuario.getItem(0));
var Cantidad = new Contenedor();
Cantidad.añadir(12);
Cantidad.añadir(30);
console.log(Cantidad.getItem(0));
