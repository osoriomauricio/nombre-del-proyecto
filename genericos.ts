
class Contenedor<T> {
    private contenido: T[]
    
    constructor() {
        this.contenido = [];
    }

    añadir(item: T): void {
        this.contenido.push(item);
    }

    getItem (id: number): T | undefined {
        return this.contenido[id];
    }
}


const nombreUsuario = new Contenedor<string>();
nombreUsuario.añadir("Juan");
nombreUsuario.añadir("Pedro");
console.log(nombreUsuario.getItem(0))


const Cantidad = new Contenedor<number>();
Cantidad.añadir(12);
Cantidad.añadir(30);
console.log(Cantidad.getItem(0))