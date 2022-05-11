
const deck = ['10C', '5D', '3H', 'JD', 'QD', '7C', 'KH', '5S', '4C', 'QH', '8C', '9D', 'JC', 'KS', '8S', '6S', '3C', '3S', 'QC', '9H', '3D', '7D', '10S', '7H', 'KD', '6C', '5H', '8H', 'JH', '6D', '5C', '2D', '4D', '4H', '6H', 'AH', '4S', 'QS', 'KC', '9S', 'AD', 'JS', '2C', '9C', 'AC', '2S', 'AS', '7S', '10H', '2H', '10D', '8D'];

export const inicializarBarajas = () => {


    if (deck.length === 52) {
        for (let i = deck.length - 1; i > 0; i--) {
            const x = Math.floor(Math.random() * (i + 1))
            const temp = deck[i];
            deck[i] = deck[x]
            deck[x] = temp;
        }
        return deck;
    }else {
        return deck;
    }
}