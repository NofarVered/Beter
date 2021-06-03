import React, { Component } from "react";
import "./TimerPage.css";

class TimerPage extends Component {
    state = {
        company: this.props.company ? this.props.company : "",
        betText: this.props.betText,
        amount: this.props.amount,
        timer: "01:09:10:02",
    };

    render() {
        return (
            <div className="">

            </div>


        )
    }
}

export default TimerPage;