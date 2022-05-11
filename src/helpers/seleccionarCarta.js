import { inicializarBaraja } from "./inicializarBaraja";

export const seleccionarCarta = () => {
    
    const baraja = inicializarBaraja();

    console.log("me ejecute")

    console.log(baraja);

    const carta = baraja.pop();

    console.log(carta)

    return carta;

}