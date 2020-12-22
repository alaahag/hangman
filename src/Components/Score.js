import React, { Component } from 'react';

function scoreColor (score) {
    console.log(score);
    if (score > 80)
        return "high_score";
    else if (score > 50 && score <=80)
        return "mid_score";
    else
        return "low_score";
}
export default class Score extends Component {

    render() {
        return(
            <div className={scoreColor(this.props.score)}>{this.props.score}</div>
        )
    }
}