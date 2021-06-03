import React, { Component } from "react";
import "./Home.css";
import Coupon from "./Coupon-logo.png";
import HomeLogo from "./Home-logo.png";
import Plus from "./plus.png";
import NewBet from "../NewBet/NewBet";
import OpenBets from "../OpenBets/OpenBets"

class Home extends Component {
    state = {
        name: this.props.name,
    };

    render() {
        return (
            <div>
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