import React from 'react';
import ReactDOM from 'react-dom';
import MortalKombat from './MortalKombat';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MortalKombat/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
