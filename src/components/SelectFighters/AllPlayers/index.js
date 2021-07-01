import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const AllPlayers = ({players, playerShow}) => {

    const handleSavePlayers = (item) => {
        localStorage.removeItem('player1');
        localStorage.removeItem('player2');
        localStorage.setItem('player1', JSON.stringify(item));
        localStorage.setItem('player2', JSON.stringify(players[Math.ceil(Math.random() * players.length - 1)]));
    }

    const handlePlayerShow = (image) => playerShow(image);

    return (
        <div className="parent">
            <div className={`character div11`}>
                <img src="http://reactmarathon-api.herokuapp.com/assets/mk/avatar/11.png" alt="item.src"/>
            </div>
            {players.map((item, key) => (
                <NavLink to="/MortalCombat/game" key={key} className={`character div${item.id}`}
                         onClick={() => handleSavePlayers(item)} onMouseOver={() => handlePlayerShow(item.img)}>
                    <img src={item.avatar} alt="item.src"/>
                </NavLink>
            ))};
        </div>
    );
};

export default AllPlayers;