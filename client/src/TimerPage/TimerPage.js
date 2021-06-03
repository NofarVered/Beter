import React, { Component } from "react";
import "./TimerPage.css";
import MdKeyboardArrowRight from "react-icons/md";
import IoArrowUndoSharp from "react-icons/md";
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
            <div>
                <MdKeyboardArrowRight className="MdArrow"/>
                <IoArrowUndoSharp className="IoArrow"/>
                <div className="bet">
                    התערבות פתוחה
                </div>
            <div className="title">
                כמה זמן ייקח לשקד לסיים לסיים את כל העונות של משחקי הכס?
            </div>
              <div className="">
                    סכום
              </div>
            </div>


        )
    }
}

export default TimerPage;