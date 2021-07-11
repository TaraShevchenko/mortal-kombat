import React, {useEffect, useState} from 'react';
import generateLogs from "./GenerateLogs/generateLogs";
import GameForm from "./GameForm";
import Player from "./Player";
import {NavLink} from "react-router-dom";


const Game = () => {

    const _ = require('lodash');

    const [players, setPlayers] = useState([]);
    const [logs, setLogs] = useState([]);
    const [restart, setRestart] = useState(false);
    const [winner, setWinner] = useState('');

    useEffect(() => {

        setPlayers([JSON.parse(localStorage.player1), JSON.parse(localStorage.player2)]);

        setLogs(() => [
            generateLogs('start', JSON.parse(localStorage.player1), JSON.parse(localStorage.player2))
        ])

    }, []);


    const changeHp = (player, damage) => {
        setPlayers((prevState) => {
            return _.values({
                ...prevState,
                [player]: {
                    ...prevState[player],
                    hp: prevState[player].hp - damage > 0 ? players[player].hp - damage : 0
                }
            });
        });
    }

    const attack = async (attack) => {
        const {player1, player2} = await attack();
        let newLog;

        changeHp(0, player2.hit !== player1.defence ? player2.value : 0);

        newLog = generateLogs(
            player2.hit !== player1.defence ? 'hit' : 'defence',
            players[0],
            players[1],
            player2.hit !== player1.defence ? player1.value : 0,
        )
        setLogs((prevState) => [
            newLog,
            ...prevState
        ]);

        if (players[0].hp - player2.value < 0) {
            setLogs((prevState) => [
                generateLogs('end', players[1], players[0]),
                ...prevState
            ])
            setRestart(true);
            setWinner(players[1].name);
        }

        changeHp(1, player1.hit !== player2.defence ? player1.value : 0);

        newLog = generateLogs(
            player1.hit !== player2.defence ? 'hit' : 'defence',
            players[1],
            players[0],
            player1.hit !== player2.defence ? player2.value : 0
        );

        setLogs((prevState) => [
            newLog,
            ...prevState
        ]);

        if (players[1].hp - player1.value < 0) {
            setLogs((prevState) => [
                generateLogs('end', players[0], players[1]),
                ...prevState
            ])
            setRestart(true);
            setWinner(players[0].name);
        }
    }

    return (
        <>
            <div className="arenas arena1">
                <GameForm attackProps={attack} restart={restart}/>
                {players.map((player, index) => <Player player={player} index={index} key={player.id}/>)}
                {restart ? <>
                    <div className="loseTitle">{winner} Wins</div>
                    <div className="reloadWrap">
                        <NavLink to="/" className="button" onClick={() => setRestart(false)}>Restart</NavLink>
                    </div>
                </> : ''}
            </div>

            <div className="chat">
                {logs.length ? logs.map((log, index) =>
                    <div key={index} className="log">
                        <div dangerouslySetInnerHTML={{__html: log}}/>
                    </div>
                ) : ''}
            </div>

            <div className="wall-left"></div>
            <div className="wall-right"></div>
        </>
    );
};

export default Game;