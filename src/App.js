import React, { useState, useContext } from 'react';
import './App.css';
import Column from './components/column/Column.js';
import BackgroundContext from "./contexts/BackgroundContext.js";
function App() {

  const colors = useContext(BackgroundContext);

  return (

    <div className="App">
      <h1 id="title">Retro Board</h1>
      <div id="board">
        <BackgroundContext.Provider value={colors[0].color} >
          <Column header="Went Well" key="column-1" />
        </BackgroundContext.Provider>
        <BackgroundContext.Provider value={colors[1].color} >
          <Column header="To Improve" key="column-2" />
        </BackgroundContext.Provider>
        <BackgroundContext.Provider value={colors[2].color} >
          <Column header="Action Items" key="column-3" />
        </BackgroundContext.Provider>
      </div>
    </div>

  );
}

export default App;
