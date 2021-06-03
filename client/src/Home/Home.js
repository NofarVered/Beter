import React, { Component } from "react";
import "./Home.css";
import Coupon from "./Coupon-logo.png";
import HomeLogo from "./Home-logo.png";
import UserLogo from"./User-logo.png";

class Home extends Component {
    state = {
        name: this.props.name,
    };

    render() {
        return (
            <div className="nav-bar">
                <img className="nav-button" src={Coupon}/>
                <img className="nav-button" src={HomeLogo}/>
                <img className="nav-button" src={UserLogo}/>
            </div>
        )
    }
}

export default Home;