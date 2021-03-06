import React from 'react';

const GameForm = ({attackProps, restart}) => {

    const hits = {
        head: 30,
        body: 25,
        foot: 20,
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const fightServer = async () => {
            const body = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
                method: 'POST',
                body: JSON.stringify({})
            }).then(res => res.json());
            return body;
        }

        const attack = async () => {
            const attackObject = await fightServer();

            for (const item of event.target) {
                if (item.checked === true && item.name === 'hit') {
                    attackObject.player1.value = Math.ceil(Math.random() * hits[item.value]);
                    attackObject.player1.hit = item.value;
                }
                if (item.checked === true && item.name === 'defence') {
                    attackObject.player1.defence = item.value;
                }
                item.checked = false;
            }
            return attackObject
        }

        attackProps(attack)
    }

    return (
        <form className="control" onSubmit={handleSubmit}>
            <div className="inputWrap">
                <h2>HIT</h2>
                <div className="ul">
                    <input type="radio" name="hit" value="head" id="headHit" required disabled={restart}/>
                    <label htmlFor="headHit">
                        <span>HEAD</span>
                    </label>
                    <input type="radio" name="hit" value="body" id="bodyHit" required disabled={restart}/>
                    <label htmlFor="bodyHit">
                        <span>BODY</span>
                    </label>
                    <input type="radio" name="hit" value="foot" id="footHit" required disabled={restart}/>
                    <label htmlFor="footHit">
                        <span>FOOT</span>
                    </label>
                </div>
            </div>
            <div className="inputWrap">
                <h2>defence</h2>
                <div className="ul">
                    <input type="radio" name="defence" value="head" id="headDefence" required disabled={restart}/>
                    <label htmlFor="headDefence">
                        <span>HEAD</span>
                    </label>
                    <input type="radio" name="defence" value="body" id="bodyDefence" required disabled={restart}/>
                    <label htmlFor="bodyDefence">
                        <span>BODY</span>
                    </label>
                    <input type="radio" name="defence" value="foot" id="footDefence" required disabled={restart}/>
                    <label htmlFor="footDefence">
                        <span>FOOT</span>
                    </label>
                </div>
            </div>
            <div className="buttonWrap">
                <button disabled={restart} className="button" type="submit">
                    Fight
                </button>
            </div>
        </form>
    );
};

export default GameForm;