import React, { Component } from "react";
import "./Home.css";
import Coupon from "./Coupon-logo.png";
import HomeLogo from "./Home-logo.png";
import Plus from "./plus.png";

class Home extends Component {
    state = {
        name: this.props.name,
    };

    render() {
        return (
            <div>
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