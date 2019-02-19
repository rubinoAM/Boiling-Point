import React, { Component } from 'react';

class TemperatureInput extends Component{
    constructor(){
        super()
        this.state = {
            temperature:80,
        }
    }

    handleCharge(e){
        this.setState({
            temperature:e.target.value,
        });
    }

    render(){
        return(
            <div>
                <legend>Scale:</legend>
                <input onChange={this.handleCharge} value={this.state.temperature} />
            </div>
        );
    }
}

export default TemperatureInput;