import React, { Component } from "react";
import "./TimerPage.css";

class TimerPage extends Component {
    state = {
        company: this.props.company ? this.props.company : "",
        betText: this.props.betText,
        amount: this.props.amount,
        timer: "01:09:10:02",
        participants: [{
            name: "נעם",
            answer: "חמישה ימים בלחץ",
        },
            {
                name: "עדי",
                answer: "שלושה ימים",
            },
            {
                name: "נופר",
                answer: "יומיים",
            },
            {
                name: "עדן",
                answer: "שלושה ימים",
            },
            {
                name: "מעיין",
                answer: "ארבעה ימים",
            }
        ],
    };


    render() {
        return (
            <div className="">
                Noam
            </div>


        )
    }
}

export default TimerPage;