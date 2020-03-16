import React, { useContext } from 'react';
import "./Task.css";
import TaskContext from "../../contexts/TaskContext.js";
import BackgroundContext from "../../contexts/BackgroundContext.js";

const Task = (props) => {

    const [taskItems, setTaskItem] = useContext(TaskContext);

    // user changes input text
    const updateTask = (e) => {
        const newTaskItems = [...taskItems];
        newTaskItems[props.index] = e.target.value;
        setTaskItem(newTaskItems);
    }

    // deleting an item
    const deleteTask = () => {
        setTaskItem(taskItems.filter((task) => {
            return task !== props.value;
        }))
    }

    return (
        // <!-- A retro card (retrospective item) -->
        <div className="taskbox" style={{ backgroundImage: `${props.bgColor}` }} >
            <textarea className="text-input-area" placeholder="Enter text here" aria-label="Enter text here"
                rows="1"
                value={props.value}
                onChange={updateTask}>
            </textarea>
            <div>
                <button className="task-button left">L</button>
                <button className="task-button delete" onClick={deleteTask}>X</button>
                <button className="task-button right">R</button>
            </div>
        </div >
    )
};

export default Task;
