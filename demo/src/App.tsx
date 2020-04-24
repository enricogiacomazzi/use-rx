import React, {useState} from 'react';
import {Counter} from "./Counter";
import {StrLen} from "./StrLen";
import {Ajax} from "./Ajax";


export const App: React.FC = () => {

    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h1>Demo</h1>
            {visible ? <Ajax/> : null }
            <button onClick={() => setVisible(!visible)}>toggle</button>
        </div>
    );
};
