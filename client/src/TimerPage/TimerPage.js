import React, { Component, useEffect, useState } from "react";
import "./TimerPage.css";
import {MdKeyboardArrowRight} from "react-icons/md";
import {TiArrowBack} from "react-icons/ti";
import {BiShareAlt} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import Timer from "./Timer";

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
    calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;

    }
    render() {
        return (
            <div>
             <Timer  hoursMinSecs={{days:1,hours:0, minutes: 0, seconds: 3}}/>
                <div className="s">
                    שניות
                </div>
                <div className="m">
                    דקות
                </div>
                <div className="h">
                    שעות
                </div>
                <div className="d">
                    ימים
                </div>
             <BiShareAlt className="MdArrow"/>
             <AiOutlineClose className="BArrow" />

              <div className="bet">
                    התערבות פתוחה
              </div>
              <div className="title">
                כמה זמן ייקח לשקד לסיים לסיים את כל העונות של משחקי הכס?
              </div>
              <div className="total">
                  ₪450
                  <br/>
                  סך הכל בקופה
              </div>
                <div className="participant">
                    ₪50
                    <br/>
                    סכום למשתתף
                </div>
            </div>


        )
    }
}

export default TimerPage;