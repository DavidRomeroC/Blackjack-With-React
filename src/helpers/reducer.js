import { transformarPuntos } from "./transformarPuntos";

const points = transformarPuntos();

export const reducer = (state, action) => {
    
    const {player1, player2, player3} = state;
    
    console.log("me ejecute reducer")

    switch (action.type) {
        case "p1":
            return ({...state, player1: player1 + points})
        case "p2":
            return ({...state, player2: player2 + points})
        case "p3":
            return ({...state, player3: player3 + points})
        default:
            return state;
    }
}