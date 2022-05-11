
const deck = [];

export const inicializarBaraja = () => {

    console.log("inicial")

    if (deck.length === 0) {
        const tipos = ["C", "D", "H", "S"];
        const especiales = ["A", "J", "Q", "K"];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        //Revuelve la baraja
        for (let i = deck.length - 1; i > 0; i--) {
            const x = Math.floor(Math.random() * (i + 1))
            const temp = deck[i];
            deck[i] = deck[x]
            deck[x] = temp;
        }
        return deck;
    } else {
        return deck
    }


}