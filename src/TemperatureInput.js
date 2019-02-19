import React, { Component } from 'react';

class TemperatureInput extends Component{
    constructor(){
        super()
        this.state = {
            temperature:80,
            msg:"",
        }
        this.handleCharge = this.handleCharge.bind(this);
    }

    handleCharge(e){
        console.log(e.target.value);
        //Accepts only numbers
        if(e.target.value.match(/^\d*$/)){
            this.setState({
                temperature:e.target.value,
                msg:'',
            });
        } else {
            this.setState({
                msg:'NaN',
            });
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <legend>Scale:</legend>
                <input onChange={this.handleCharge} value={this.state.temperature} />
            </div>
        );
    }
}

export default TemperatureInput;