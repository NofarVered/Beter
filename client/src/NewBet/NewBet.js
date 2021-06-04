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
                <h1 className="betText">{this.state.betText}</h1>
                <p className="companyName">
                    {this.state.company}
                    {"\n"}
                {this.state.amount}</p>
                <h4 className="timer">{this.state.timer}</h4>

            </div>


        )
    }
}

export default NewBet;