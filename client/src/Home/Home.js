import React, { Component } from "react";
import "./Home.css";
import Coupon from "./Coupon-logo.png";
import HomeLogo from "./Home-logo.png";
import Plus from "./plus.png";
import NewBet from "../NewBet/NewBet";
import OpenBets from "../OpenBets/OpenBets"

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
            <div>

                <div className="head">
                    <h1 className="title">לוח התערבויות</h1>
                    <div className="private" onClick={this.private}  style={{  fontWeight:this.state.fWeight_pr, borderBottom: this.state.border_pr}}>פרטי</div>
                    <div className="public" onClick={this.public} style={{  fontWeight:this.state.fWeight_pu, borderBottom: this.state.border_pu}}> ציבורי </div>

                </div>
                  <OpenBets/>
                <div className="nav-bar">
                    <img className="nav-button" src={Coupon}/>
                    <img className="nav-plus" src={Plus}/>
                    <img className="nav-button" src={HomeLogo}/>
                </div>
            </div>


        )
    }
}

export default Home;