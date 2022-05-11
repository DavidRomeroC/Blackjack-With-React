import { seleccionarCarta } from "./seleccionarCarta";

const carta = seleccionarCarta();

export const transformarPuntos = () => {
    
    console.log("me ejecute transform")

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === "A") ? 11 : 10
        : valor * 1;
}