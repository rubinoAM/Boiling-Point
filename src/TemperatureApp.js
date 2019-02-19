import React, { Component } from 'react';
import TempInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

class TemperatureApp extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="temp app">
                <TempInput />
                <TempInput />
                <BoilingVerdict />
            </div>
        );
    }
}

export default TemperatureApp;