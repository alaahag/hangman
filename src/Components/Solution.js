import Letter from "./Letter";
import React, { Component } from 'react';

function displayUnderscores(){
    let underscore = [];
    for (let i=0; i<4; i++){
        underscore.push("_");
    }
    return underscore;
}
export default class Solution extends Component {
    render() {
        return(
            <div>
                <div>
                    {Array.from(this.props.solution.word).map(m => (<Letter letter={this.props.letterStatus[m] === true? m : "_"} />))}
                </div>
                <div>
                    <em>{this.props.solution.hint}</em>
                </div>
            </div>
        )
    }
}