import React, {useEffect, useState} from 'react';
import GameForm from "./GameForm";

const Game = () => {

    const [players, setPlayers] = useState([]);

    useEffect( () => {
        setPlayers([JSON.parse(localStorage.player1), JSON.parse(localStorage.player2)]);
    }, []);

    const attack = async (attack) => {
        const {player1, player2} = await attack();
        console.log('#####', player1);
        console.log('#####', player2);
    }

    const changeHp = () => {

    }

    return (
        <>
            <div className="arenas arena1">
                <GameForm attackProps={attack}/>

                {players.map((player, index) => (
                    <div key={player.id} className={`player${index + 1}`}>
                        <div className="progressbar">
                            <div className="life" style={{width: `${player.hp}%`}}>

                            </div>
                            <div className="name">{player.name}</div>
                        </div>
                        <div className="character">
                            <img src={player.img}/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="chat"></div>
            <div className="wall-left"></div>
            <div className="wall-right"></div>
        </>
    );
};

export default Game;