import React, { useState, useCallback, useContext } from 'react';
import Task from '../task/Task.js';
import BackgroundContext from "../../contexts/BackgroundContext.js";
import BoardContext from "../../contexts/BoardContext.js";
import "./Column.css";

const Column = (props) => {

    const color = useContext(BackgroundContext);
    const [board, setBoard] = useContext(BoardContext);
    const [columnValue,] = useState(props.colValue);

    return (
        <div className="column">
            <h2 className="col-header">{props.header}</h2>
            <button className="add-button" type="button" onClick={() => props.addNewBlankTask(props.colValue)}>Add Item</button>

            {board[props.colValue].tasks.map((task, index) => {
                return (<div>
                    <Task value={task.task} key={props.header + "-" + index} index={index}
                        bgColor={color} columnValue={columnValue} />

                </div>
                )
            }
            )
            }
        </div>
    )
};

export default Column;

