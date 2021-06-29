import React, {useEffect, useState} from 'react';

const AllPlayers = () => {

    const [players, setPlayers] = useState([])

    useEffect(async () => {

        const res = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        setPlayers(res)
    }, [])

    return (
        <div className="parent">
            <div className={`character div11`}>
                <img src="http://reactmarathon-api.herokuapp.com/assets/mk/avatar/11.png" alt="item.src"/>
            </div>
            {players.map((item, key) => (
                <div key={key} className={`character div${item.id}`}>
                    <img src={item.avatar} alt="item.src"/>
                </div>
            ))};
        </div>
    );
};

export default AllPlayers;