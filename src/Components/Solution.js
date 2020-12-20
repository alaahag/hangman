//import Letter from "./Letter";
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
                    {displayUnderscores().map(m => (<span>{m} </span>))}
                </div>
                <div>
                    <em>Your ideal mood when coding.</em>
                </div>
            </div>
        )
    }
}