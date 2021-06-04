import React, { Component } from "react";
import "./Home.css";
import Coupon from "./Coupon-logo.png";
import HomeLogo from "./Home-logo.png";
import profile from "./profile.png";
import notification from "./notification.png";
import Plus from "./plus.png";
import NewBet from "./New-Bet .png";
import OpenBets from "../OpenBets/OpenBets";
import bets from "./Bets.png";
import challenge from "./Challenge.png"
import { Link } from "react-router-dom";


class Home extends Component {
    state = {
        border_pr: "0px solid",
        fWeight_pr : "normal",
        border_pu: "0px solid",
        fWeight_pu : "normal",
    };
    private = (e) => {
        this.setState({
            border_pr: "3px solid",
            fWeight_pr : "bold",
            border_pu: "0px solid",
            fWeight_pu : "normal",
        })
    }
    public = (e) => {
        this.setState({
            border_pu: "3px solid",
            fWeight_pu : "bold",
            border_pr: "0px solid",
            fWeight_pr : "normal",
        })
    }

    render() {

        return (
            <div className="home-page">
                <div className="head">
                    <div className="container">
                        <div className="row" style={{top: "28px", position: "relative"}}>
                            <div className="col-1">
                                <Link to="/timerPage2">
                                    <button className="notifi">
                                        <img src={notification}/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-10">
                                <h1 className="home-title">אתגרים</h1>
                            </div>
                            <div className="col-1">
                                <img src={profile}/>
                            </div>
                        </div>
                    </div>
                    <div className="private" onClick={this.private}  style={{  fontWeight:this.state.fWeight_pr, borderBottom: this.state.border_pr}}>פרטי</div>
                    <div className="public" onClick={this.public} style={{  fontWeight:this.state.fWeight_pu, borderBottom: this.state.border_pu}}> ציבורי </div>
                </div>

                <div className="left-ticket">
                  <OpenBets/>
                </div>
                <div className="right-ticket">
                    <OpenBets/>
                </div>
                <div className="nav-bar">
                    <img className="nav-button" src={challenge}/>
                    <img className="nav-plus" src={NewBet}/>
                    <img className="nav-button" src={bets}/>
                </div>
            </div>


        )
    }
}

export default Home;