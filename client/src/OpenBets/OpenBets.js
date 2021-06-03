import React, { Component } from "react";
import NewBet from "../NewBet/NewBet";
import Home from "../Home/Home";
import "./OpenBets.css"



class OpenBets extends Component{

    state = {
        tickets: [{
            company: "אל-על",
            betText: "מה היעד שאליו טסו הכי הרבה ישראלים בקורונה?",
            amount: "230 משתתפים",
        },
            {
                company: "אל-על",
                betText: "מה היעד שאליו טסו הכי הרבה ישראלים בקורונה?",
                amount: "230 משתתפים",
            },
            {
                company: "אל-על",
                betText: "מה היעד שאליו טסו הכי הרבה ישראלים בקורונה?",
                amount: "230 משתתפים",
            },
            {
                company: "אל-על",
                betText: "מה היעד שאליו טסו הכי הרבה ישראלים בקורונה?",
                amount: "230 משתתפים",
            },
            {
                company: "אל-על",
                betText: "מה היעד שאליו טסו הכי הרבה ישראלים בקורונה?",
                amount: "230 משתתפים",
            },
            {
                company: "אל-על",
                betText: "מה היעד שאליו טסו הכי הרבה ישראלים בקורונה?",
                amount: "230 משתתפים",
            }
        ],
    };

    render() {
        return (
            <div className="tickets">
                {this.state.tickets.map((ticket,index) => <div key={index}>
                <NewBet company={ticket.company}
                        betText={ticket.betText}
                        amount={ticket.amount}></NewBet>
                    </div>)}
            </div>
        )
    }
}

export default OpenBets;
