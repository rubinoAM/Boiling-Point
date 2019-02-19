import React, { Component } from 'react';
import TempInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

class TemperatureApp extends Component{
    constructor(){
        super();
        this.state = {
            temperature: 18,
            scale: 'c',
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(val){
        console.log("Celsius value changed to " + val);
        this.setState({
            temperature: val.target.value,
            scale:'c',
        });
    }

    handleFahrenheitChange(val){
        console.log("Fahrenheit value changed to " + val);
        this.setState({
            temperature: val.target.value,
            scale:'f',
        });
    }

    render(){
        let fTemp, cTemp;
        const scale = this.state.scale;
        const temp = this.state.temperature;
        if(scale == 'c'){
            fTemp = Math.round(((temp * 9/5) + 32)*100)/100;
            cTemp = temp;
        } else if (scale == 'f'){
            fTemp = temp;
            cTemp = Math.round(((temp - 32) * 5/9)*100)/100;
        }

        return(
            <div id="temp app">
                <TempInput scale="f" temperature={fTemp} onChange={this.handleFahrenheitChange}/>
                <TempInput scale="c" temperature={cTemp} onChange={this.handleCelsiusChange} />
                <BoilingVerdict />
            </div>
        );
    }
}

export default TemperatureApp;