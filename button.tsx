import React from "react";

type Color = "red" | "blue" | "green";

type ButtonProps = {
    backgroundcolor: Color;
    textColor: Color;
    fontSize: number;
    pillShape?: boolean[];
    padding: number[];
};

export default function Button({
    backgroundcolor,
    fontSize,
    pillShape,
}: ButtonProps) {
    return (
        <button className="bg-blue-500 text-white rounded px-4 py-2">
            Click me
        </button>
    );
}