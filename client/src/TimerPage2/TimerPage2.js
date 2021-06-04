import React, { Component, useEffect, useState } from "react";
import "./TimerPage.css";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import user4 from "./user4.png";
import user5 from "./user5.png";
import user6 from "./user6.png";
import {MdKeyboardArrowRight} from "react-icons/md";
import {TiArrowBack} from "react-icons/ti";
import {BiShareAlt} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import Timer from "./Timer";

class TimerPage2 extends Component {
    state = {
        company: this.props.company ? this.props.company : "",
        betText: this.props.betText,
        amount: this.props.amount,
        timer: "01:09:10:02",
        participants: [{
            name: "עדן",
            answer: "נראה לי שבוע",
            pic: user1,
            date: "10:03",
        },
            {
                name: "עדי",
                answer: "שלושה ימים",
                pic: user2,
                date: "1/6/21",
            },
            {
                name: "נופר",
                answer: "יומיים",
                pic: user3,
                date: "1/6/21",
            },
            {
                name: "עדן",
                answer: "שלושה ימים",
                pic: user4,
                date: "19:49",
            },
            {
                name: "מעיין",
                answer: "ארבעה ימים",
                pic: user5,
                date: "20:00",
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
            <div className="timerPage">
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
             <BiShareAlt style={{color:"white"}} className="MdArrow"/>
             <AiOutlineClose style={{color:"white"}} className="BArrow" />

              <div className="bet">
                    התערבות פתוחה
              </div>
              <div className="title">
                כמה זמן ייקח לשקד לסיים לסיים את כל העונות של משחקי הכס?
              </div>
              <div className="total">
                  ₪450
                  <br/>
                  <div style={{color:"gray"}}>
                  סך הכל בקופה
                  </div>
              </div>
                <div className="participant">
                    ₪50
                    <br/>
                    <div style={{color:"gray"}}>
                    סכום למשתתף
                    </div>
                </div>
                <div className="all-participants">
                    <p style={{textAlign:"right", marginRight: "31px" , fontWeight: "500", fontSize: "14px"}}>משתתפים</p>
                    <div className="participants-list">
                        {this.state.participants.map((person,index) =>
                            (
                                <div className="row" key={index}>
                                    <div  className="col-2">
                                        <img src={person.pic} alt={`user${index+1}`}/>
                                    </div>
                                    <div className="col-10">

                                            <div style={ index==0 ? {fontWeight: "bolder", color: "#FF2459"} : {fontWeight: "bolder", color: "#8F4557"}}>
                                            {person.name}
                                        </div>
                                        <div style={ index==0 ? {color: "#FF2459"} : {color: "#929292"}}>
                                        {person.answer}
                                        </div>
                                        <div style={ index==0 ? {color: "#FF2459"} : {color: "#929292"}} className="date">
                                            {person.date}
                                        </div>
                                    </div>
                                </div>))}
                    </div>
                </div>
            </div>


        )
    }
}

export default TimerPage2;