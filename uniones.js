// type IDFieldType = string | number;
// 
// 
// const printID = (id: IDFieldType) => {
//     console.log("ID: " + id);
// };
// 
// printID(123);
var firmaContrato = function (empleado) {
    console.log("Contrato firmado por " + empleado.nombre + " con email: " + empleado.email);
};
firmaContrato({ nombre: "Pedro", credito: 800, id: 34, email: "pedro@gmail.com" });
