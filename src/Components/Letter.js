import React from 'react';

function selectLetter (props) {
    props.selectLetter(props.letter);
}

const Letter = (props) => {
    return <span onClick={() => selectLetter(props)} className={props.className? props.className : ""}>{props.letter}</span>
}

export default Letter