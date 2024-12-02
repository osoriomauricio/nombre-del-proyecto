import { useState } from "react";

export interface Persona {
    nombre: string;
    edad: number;
    isMarried: boolean;
}


export const Persona = (props: Persona) => {
    const [isShowInfo, setShowInfo] = useState<boolean>(false);

    const toogleInfo = () => {
        setShowInfo((prev) => !prev);
    }

    return ( 
        <div>
            {isShowInfo && (
            <>
                <p>nombre: {props.nombre}</p>
                <p>edad: {props.edad}</p>
                <p>This person {props.isMarried ? "is married" : "is single"}</p>
            </>
            )}

            <button onClick={toogleInfo}> Toggle Info</button>
        </div>
    );
};