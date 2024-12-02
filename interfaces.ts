interface UserInterface {
    id: number;
    name: string;
    age?: number;
    saludo(mensaje: string): void;
}

const User: UserInterface = {
    id: 2,
    name: "pedro",
    saludo(mensaje) {
        console.log(mensaje);
    },
};

User.saludo("Hola");

// if (!User.age) {
//     console.log("User has no age");
// } else{
//     console.log(User.age)
// }
