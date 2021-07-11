import React, {useEffect, useState} from 'react';
import AllPlayers from "./AllPlayers";

/* eslint-disable */

const SelectFighters = () => {
    const [players, setPlayers] = useState([]);
    const [playerShow, setPlayerShow] = useState('');

    useEffect(async () => {
        const res = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        setPlayers(res);
    }, []);

    const handlePlayerShow = (image) => {
        setPlayerShow(image);
    }

    return (
        <div className="selectFighters">
            <div className="title">
                SELECT YOUR FIGHTERS
            </div>
            <div className="player">{playerShow ? <img src={playerShow} alt="playerShow"/> : ''}</div>
            <AllPlayers players={players} playerShow={handlePlayerShow} />
        </div>
    );
};

export default SelectFighters;