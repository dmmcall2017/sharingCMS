import React, { Component } from 'react';

import './App.css';
import Admin from "./admin";

class App extends Component {

    componentDidUpdate(){
        console.log("=====componentDidUpdate===========\n");
    }
    render() {
        return (
            <div>
                <Admin/>
            </div>
        );
    }
}

export default App;
