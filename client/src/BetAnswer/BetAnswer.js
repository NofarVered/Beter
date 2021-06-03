import React, { Component, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./BetAnswer.css"
import {BiShareAlt} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



class BetAnswer extends Component {
    state = {
        company: this.props.company ? this.props.company : "",
        betText: this.props.betText,
        amount: this.props.amount,
        timer: "01:09:10:02",

    };

    render() {
        return (
            <div>
                <AiOutlineClose className="BArrow" />
                <div className="addbet">
                   הצטרפות להתערבות
                </div>
                <div className="answer">

                    אז, מה התשובה שלך?
                </div>

                <div className="titlebet">

                     כמה זמן ייקח לשקד לסיים את כל העונות של משחקי הכס ?

                </div>
                <form className="answer-input" noValidate autoComplete="off">
                    <TextField id="standard-basic" label="הכנס תשובה" />
                </form>
            </div>

        )
    }
}

export default BetAnswer;