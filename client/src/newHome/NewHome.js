import React, { Component } from "react";
import "../Home/Home.css"
import { Link } from "react-router-dom";

class NewHome extends Component {
    render(){
        return(
            <div className="newHome">
                <Link to="/home">
                    <button className="newHome-btn"></button>
                </Link>
            </div>
        )
    }


}
export default NewHome