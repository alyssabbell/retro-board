import React from 'react';
import './App.css';
import Column from './components/column/Column.js';

function App() {
  return (
    <div className="App">
      <h1 id="title">Retro Board</h1>
      <div id="board">
        <Column color="green" header="Went Well" key="column-1"/>
        <Column color="pink" header="To Improve" key ="column-2"/>
        <Column color="purple" header="Action Items" key="column-3"/>
      </div>
    </div>
  );
}

export default App;
