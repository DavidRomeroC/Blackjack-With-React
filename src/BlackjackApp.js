import React, { useReducer, useState } from 'react'
import { reducer } from './helpers/reducer';
import { seleccionarCarta } from './helpers/seleccionarCarta';

const initialPoints = {
    player1: 0,
    player2: 0,
    player3: 0,
    CPU: 0,
}


export const BlackjackApp = () => {
    const carta = seleccionarCarta();

    console.log("me ejecute main")

    const [card, setCard] = useState({
        cp1: "2C",
        cp2: "2C",
        cp3: "2C",
    })

    const { cp1, cp2, cp3 } = card;

    console.log(cp1);
    console.log(cp2);
    console.log(cp3);

    const [buttonStop, setButtonStop] = useState({
        btn1: false,
        btn2: false,
        btn3: false,
    })

    const { btn1, btn2, btn3 } = buttonStop;

    const handleStop = ({ target }) => {
        const id = target.id;

        if (id === "SP1") {
            return setButtonStop({ ...buttonStop, btn1: true })
        } else if (id === "SP2") {
            return setButtonStop({ ...buttonStop, btn2: true })
        } else if (id === "SP3") {
            return setButtonStop({ ...buttonStop, btn3: true })
        } else {
            return buttonStop;
        }
    }

    const [points, dispatch] = useReducer(reducer, initialPoints)

    const { player1, player2, player3, CPU } = points;
    console.log(points)
    console.log(player1)

    const handleTake = ({ target }) => {
        const id = target.id;
        dispatch({ type: id })

        console.log("me ejecute take")

        if (id === "p1") {
            return setCard({ ...card, cp1: carta })
        } else if (id === "p2") {
            return setCard({ ...card, cp2: carta })
        } else if (id === "p3") {
            return setCard({ ...card, cp3: carta })
        } else {
            return card
        }
    }

    return (
        <div className='blackjack__main-content'>

            <div>Renderizar componente ganador</div>

            <div>
                <p>CPU: {CPU}</p>
                <div className='blackjack__card-content'>
                    {<img src={require(`./cartas/2C.png`)} alt="carta" />}
                </div>
            </div>
            <div className='blackjack__cards-playerscontent'>
                <div>
                    <p>Player1: {player1}</p>
                    <button
                        className='btn btn-take'
                        disabled={((player1 >= 21) ? true : false) || ((btn1 === false) ? false : true)}
                        id="p1"
                        onClick={handleTake}>
                        Tomar una carta
                    </button>
                    <button
                        id="SP1"
                        onClick={handleStop}
                        className='btn btn-stop'
                    >
                        Detener
                    </button>
                    <div className="blackjack__card-content">
                        {<img src={require(`./cartas/${cp1}.png`)} alt="carta" />}
                    </div>
                </div>


                <div>
                    <p>Player2: {player2}</p>
                    <button
                        className='btn btn-take'
                        disabled={((player2 >= 21) ? true : false) || ((btn2 === false) ? false : true)}
                        id="p2"
                        onClick={handleTake}>Tomar una carta</button>
                    <button
                        id="SP2"
                        onClick={handleStop}
                        className='btn btn-stop'
                    >
                        Detener
                    </button>
                    <div className='blackjack__card-content'>
                        {<img src={require(`./cartas/${cp2}.png`)} alt="carta" />}
                    </div>
                </div>


                <div>
                    <p>Player3: {player3}</p>
                    <button
                        className='btn btn-take'
                        disabled={((player3 >= 21) ? true : false) || ((btn3 === false) ? false : true)}
                        id="p3"
                        onClick={handleTake}>Tomar una carta</button>
                    <button
                        className='btn btn-stop'
                        id="SP3"
                        onClick={handleStop}
                    >
                        Detener
                    </button>
                    <div className='blackjack__card-content'>
                        {<img src={require(`./cartas/${cp3}.png`)} alt="carta" />}
                    </div>
                </div>

            </div>
        </div>
    )
}
