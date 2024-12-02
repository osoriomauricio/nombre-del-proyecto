export interface Persona {
    nombre: string;
    edad: number;
    isMarried: boolean;
}


export const Persona = (props: Persona) => {
    return ( 
        <div>
            <p>nombre: {props.nombre}</p>
            <p>edad: {props.edad}</p>
            <p>This person {props.isMarried ? "is married" : "is single"}</p>
        </div>
    );
};