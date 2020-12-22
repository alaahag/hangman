import './App.css';
import Score from './Components/Score';
import Letters from './Components/Letters';
import Solution from './Components/Solution';
import EndGame from './Components/EndGame';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {word: "BYTES", hint: "Your ideal mood when coding."},
      score: 100,
      correct: 0
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = (letter) => {
    //score if true or false
    if (this.state.score <= 0){
        console.log("Game Over");
    }
    else if (this.state.correct === (this.state.solution.word.length))
      console.log("CONGRATULATIONS");
    else {
      if (this.state.solution.word.includes(letter)) {
        this.setState({ score: this.state.score+10});
        this.setState({correct: this.state.correct + 1});
      }
      else {
        this.setState({ score: this.state.score-10});
      }

      let le = this.state.letterStatus;
      le[letter] = true;
      this.setState({ letterStatus: le})
    }
  }


  render(){
      return (

          <header className="App App-header">
            <EndGame score={this.state.score} word={this.state.solution.word} win={this.state.correct === (this.state.solution.word.length)} />
            <Score score={this.state.score} /><Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />

            <Letters selectLetter={this.selectLetter} letterStatus={this.state.letterStatus}>

              .... //Eventually we will display all the available letters here: A - Z
            </Letters>
          </header>

        );
      }
  }

export default App;
