import Letter from "./Letter";
import React, { Component } from 'react';

export default class Letters extends Component {
    render() {
        return(
            <div>
                <div>Available letters</div>
                <br/>
                {Object.keys(this.props.letterStatus).map(m => (<Letter selectLetter={this.props.selectLetter} letter={m} className={this.props.letterStatus[m] === true? "strikeout_word" : m} />))}
            </div>
        )
    }
}