import './MortalKombat.css';

import {Route} from "react-router-dom";

import SelectFighters from "./components/SelectFighters";

const MortalKombat = () => {

    return (
            <div className="root">
                <Route path='/MortalCombat/' exact>
                    <SelectFighters/>
                </Route>

                <Route path='/MortalCombat/game'>
                    <div className="arenas arena1">
                        <form className="control">
                            <div className="inputWrap">
                                <h2>HIT</h2>
                                <div className="ul">
                                    <input type="radio" name="hit" value="head" id="headHit" required/>
                                    <label htmlFor="headHit">
                                        <span>HEAD</span>
                                    </label>
                                    <input type="radio" name="hit" value="body" id="bodyHit" required/>
                                    <label htmlFor="bodyHit">
                                        <span>BODY</span>
                                    </label>
                                    <input type="radio" name="hit" value="foot" id="footHit" required/>
                                    <label htmlFor="footHit">
                                        <span>FOOT</span>
                                    </label>
                                </div>
                            </div>
                            <div className="inputWrap">
                                <h2>defence</h2>
                                <div className="ul">
                                    <input type="radio" name="defence" value="head" id="headDefence" required/>
                                    <label htmlFor="headDefence">
                                        <span>HEAD</span>
                                    </label>
                                    <input type="radio" name="defence" value="body" id="bodyDefence" required/>
                                    <label htmlFor="bodyDefence">
                                        <span>BODY</span>
                                    </label>
                                    <input type="radio" name="defence" value="foot" id="footDefence" required/>
                                    <label htmlFor="footDefence">
                                        <span>FOOT</span>
                                    </label>
                                </div>
                            </div>
                            <div className="buttonWrap">
                                <button className="button" type="submit">
                                    Fight
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="chat"></div>
                    <div className="wall-left"></div>
                    <div className="wall-right"></div>
                </Route>
            </div>
    );
}

export default MortalKombat;
