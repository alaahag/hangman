import './App.css';
import Score from './Components/Score';
import Letters from './Components/Letters';
import Letter from './Components/Letter';
import Solution from './Components/Solution';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Score /><Solution />

        <Letters><Letter></Letter><Letter></Letter>
          .... //Eventually we will display all the available letters here: A - Z
        </Letters>
      </header>
    </div>
  );
}

export default App;
