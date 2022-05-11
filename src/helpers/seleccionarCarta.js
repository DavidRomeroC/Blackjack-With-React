import { inicializarBaraja } from "./inicializarBaraja";
import { inicializarBarajas } from "./inicializarBarajas";

export const seleccionarCarta = () => {
    
    const baraja = inicializarBarajas();

    console.log("me ejecute")

    console.log(baraja);

    const carta = baraja.pop();

    console.log(carta)

    return carta;

}