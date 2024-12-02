// type IDFieldType = string | number;
// 
// 
// const printID = (id: IDFieldType) => {
//     console.log("ID: " + id);
// };
// 
// printID(123);

interface Compañeros {
    nombre: string;
    credito: number;
}

interface UserIdentidad {
    id: number;
    email: string;
}

type Empleado = Compañeros & UserIdentidad

const firmaContrato = (empleado: Empleado): void => {
    console.log("Contrato firmado por " + empleado.nombre+" con email: " + empleado.email)
}

firmaContrato({nombre: "Pedro", credito: 800, id: 34, email: "pedro@gmail.com"})