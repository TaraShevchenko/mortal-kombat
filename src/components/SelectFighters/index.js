import React from 'react';
import AllPlayers from "./AllPlayers/AllPlayers";

const SelectFighters = () => {

    return (
        <>
            <div className="title">
                SELECT YOUR FIGHTERS
            </div>
            <div className="player"></div>
            <AllPlayers />
        </>
    );
};

export default SelectFighters;