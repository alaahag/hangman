import Letter from "./Letter";
import React, { Component } from 'react';

export default class Letters extends Component {
    render() {
        return(
            <div>
                <div>Available letters</div>
                <span><Letter /></span>
            </div>
        )
    }
}