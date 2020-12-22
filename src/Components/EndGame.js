import React, { Component } from 'react';

export default class EndGame extends Component {

    render() {
        return(
            <div>
                <div>{this.props.score <= 0 ? "Game Over!" : ""}{this.props.win ? "CONGRATULATIONS!": ""}</div>
                <div>{this.props.score <= 0 ? this.props.word : ""}</div>
            </div>
        )
    }
}