import React, {useEffect, useState} from 'react';
import GameForm from "./GameForm";
import Player from "./Player";
import Log from "./Log";

const Game = () => {

    const _ = require('lodash');

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers([JSON.parse(localStorage.player1), JSON.parse(localStorage.player2)]);
    }, []);

    const changeHp = (player, damage) => {
        setPlayers((prevState) => {
            return _.values({...prevState, [player]: {...prevState[player], hp: players[player].hp - damage}});
        });
    }

    const newGenerateLogs = (type, players, attack) => {

        const logs = {
            test: 'test'
        }

        switch (type) {
            case 'draw':

                break;
            case 'start':
                logs[type]
                break;
            case 'hit':

                break;
            case 'defence':

                break;
            case 'end':

                break;
            default:

                break;
        }
    }

    const attack = async (attack) => {
        const {player1, player2} = await attack();

        await console.log('#####', player1, player2);

        changeHp(0, player2.hit !== player1.defence ? player2.value : 0);

        changeHp(1, player1.hit !== player2.defence ? player1.value : 0);
    }




    return (
        <>
            <div className="arenas arena1">
                <GameForm attackProps={attack}/>
                {players.map((player, index) => <Player player={player} index={index} key={player.id}/>)}
            </div>




            <div className="wall-left"></div>
            <div className="wall-right"></div>
        </>
    );
};

export default Game;