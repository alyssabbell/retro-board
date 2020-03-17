import React, { useState, useCallback, useContext } from 'react';
import Task from '../task/Task.js';
import TaskContext from "../../contexts/TaskContext.js";
import BackgroundContext from "../../contexts/BackgroundContext.js";
import "./Column.css";

const Column = (props) => {

    const [taskItems, setTaskItem] = useState([]);
    console.log(taskItems);

    const color = useContext(BackgroundContext);

    // function to add a new task item into state when button clicked - for now tasks are strings (state is an array of strings)
    const newTask = () => {
        setTaskItem([...taskItems, ""]);
    };

    console.log("state: " + taskItems);
    return (
        <div className="column">
            <h2 className="col-header">{props.header}</h2>
            <button className="add-button" type="button" onClick={newTask}>Add Item</button>

            {taskItems.map((taskName, index) => {
                return (<div>
                    <TaskContext.Provider value={[taskItems, setTaskItem]} >
                        <Task value={taskName} key={props.header + "-" + index} index={index}
                            bgColor={color} />
                    </TaskContext.Provider>
                </div>
                )
            }
            )
            }
        </div>
    )
};

export default Column;

