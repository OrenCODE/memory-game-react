import React from 'react';
import {Game} from './Game/Game';
import './App.css';

export class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Memory Game
                </header>
                <Game/>
            </div>
        );
    }
}
