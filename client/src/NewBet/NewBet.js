import React, { Component } from "react";
import "./NewBet.css";

class NewBet extends Component {
    state = {
        company: this.props.company ? this.props.company : "",
        betText: this.props.betText,
        amount: this.props.amount,
        timer: "01:09:10:02",
    };

    render() {
        return (
            <div className="betTicket">
                <h3 className="companyName">{this.state.company}</h3>
                <h1 className="betText">{this.state.betText}</h1>
                <h4 className="amount">{this.state.amount}</h4>
                <h4 className="timer">{this.state.timer}</h4>
            </div>


        )
    }
}

export default NewBet;