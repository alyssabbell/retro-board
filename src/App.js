import React, { useState, useContext } from 'react';
import './App.css';
import Column from './components/column/Column.js';
import BackgroundContext from "./contexts/BackgroundContext.js";
import BoardContext from "./contexts/BoardContext.js";
function App() {

  const colors = useContext(BackgroundContext);

  const [retroBoard, setRetroBoard] = useState([
    {
      id: 0,
      header: "Went Well",
      tasks: []
    },
    {
      id: 1,
      header: "To Improve",
      tasks: []
    },
    {
      id: 2,
      header: "Action Items",
      tasks: []
    }
  ]);

  const addNewBlankTask = (colNum) => {
    let taskItem = {
      thumbsUp: 0,
      thumbsDown: 0,
      task: ""
    };

    const newBoard = [...retroBoard];
    newBoard[colNum].tasks.push(taskItem);
    setRetroBoard(newBoard);

  };

  console.log("state now looks like: ", retroBoard);

  return (

    <div className="App">
      <h1 id="title">Retro Board</h1>
      <div id="board">
        <BoardContext.Provider value={[retroBoard, setRetroBoard]} >
          {
            retroBoard.map((column, index) => {
              return (
                <BackgroundContext.Provider value={colors[index].color} >
                  <Column header={column.header} addNewBlankTask={addNewBlankTask} key={index} colValue={index} />
                </BackgroundContext.Provider>
              )
            })
          }
        </BoardContext.Provider>
      </div>
    </div>

  );
}

export default App;
