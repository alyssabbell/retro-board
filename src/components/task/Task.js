import React from 'react';
import "./Task.css";

const Task = (props) => {

    const handleInput = (e) => {
        props.setTaskList(e.target.value);
    }

    //console.log(props.item);
    
    return (
        // <!-- A retro card (retrospective item) -->
        <div className="taskbox">
            <textarea className="text-input-area" placeholder="Enter text here" aria-label="Enter text here"
              rows="1"
              value={props.taskList}
              onChange={handleInput}>
            >
                  Here is an example
            </textarea>
            <div>
                <button className="task-button left">L</button>
                <button className="task-button delete">X</button>
                <button className="task-button right">R</button>
            </div>
    </div>
    )
};

export default Task;
