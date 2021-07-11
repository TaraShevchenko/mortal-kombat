import React from 'react';

/* eslint-disable */

const Player = ({player, index}) => {

    return (
        <div className={`player${index + 1}`}>
            <div className="progressbar">
                <div className="life" style={{width: `${player.hp}%`}}>

                </div>
                <div className="name">{player.name}</div>
            </div>
            <div className="character">
                <img src={player.img} alt={`image${player.img}`}/>
            </div>
        </div>
    );
};

export default Player;