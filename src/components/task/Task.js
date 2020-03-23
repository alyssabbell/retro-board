import React, { useContext, useState } from 'react';
import "./Task.css";
import ThumbsUp from "../../images/thumbs-up-regular.svg"
import ThumbsDown from "../../images/thumbs-down-regular.svg";
import BoardContext from '../../contexts/BoardContext';

const Task = (props) => {

    const [board, setBoard] = useContext(BoardContext);
    const [thumbsUpCount, setThumbsUpCount] = useState(board[props.columnValue].tasks[props.index].thumbsUp);
    const [thumbsDownCount, setThumbsDownCount] = useState(board[props.columnValue].tasks[props.index].thumbsDown);


    const updateTaskItem = (inputString, taskIndex) => {
        let newInput = "";
        newInput += inputString;
        let newBoard = [...board];
        let newTaskArray = newBoard[props.columnValue].tasks;
        newTaskArray[taskIndex].task = newInput;

        setBoard(newBoard);
    };


    const handleThumbsUp = () => {
        let newBoard = [...board];
        let newThumbsUp = thumbsUpCount;
        newThumbsUp++;
        setThumbsUpCount(newThumbsUp);
        newBoard[props.columnValue].tasks[props.index].thumbsUp = newThumbsUp;
        setBoard(newBoard);
    };


    const handleThumbsDown = () => {
        let newBoard = [...board];
        let newThumbsDown = thumbsDownCount;
        newThumbsDown++;
        setThumbsDownCount(newThumbsDown);
        newBoard[props.columnValue].tasks[props.index].thumbsDown = newThumbsDown;
        setBoard(newBoard);
    };

    // deleting an item
    const deleteTask = () => {
        let newBoard = [...board];
        let newTaskArray = newBoard[props.columnValue].tasks;
        const alteredArray = newTaskArray.filter((task, index) => {
            return index !== props.index;
        })

        newBoard[props.columnValue].tasks = alteredArray;
        setBoard(newBoard);
    };

    // handles left or right clicks
    const handleMoveClick = (e) => {
        const selectedButtonId = e.target.id;
        let newBoard = [...board];
        let newColValue = 0;

        if (selectedButtonId === "left") {
            if (props.columnValue !== 0) {
                newColValue = props.columnValue - 1;
            }
            else {
                newColValue = 2;
            }
        }
        else {
            if (props.columnValue !== 2) {
                newColValue = props.columnValue + 1;
            }
            else {
                newColValue = 0;
            }
        }

        newBoard[newColValue].tasks.push(newBoard[props.columnValue].tasks[props.index]);
        setBoard(newBoard);
        deleteTask();
    };


    return (
        <div className="taskbox" style={{ backgroundImage: `${props.bgColor}` }} >
            <textarea className="text-input-area" placeholder="Enter text here" aria-label="Enter text here"
                rows="1"
                value={props.value}
                onChange={(event) => updateTaskItem(event.target.value, props.index)}>

            </textarea>
            <div>
                <button className="task-button left" id="left" onClick={handleMoveClick}>L</button>
                <button className="task-button delete" onClick={deleteTask}>X</button>
                <span className="thumb-icon" onClick={handleThumbsUp}><img src={ThumbsUp} width="5%"></img>{thumbsUpCount}</span>
                <span className="thumb-icon" onClick={handleThumbsDown}><img src={ThumbsDown} width="5%"></img>{thumbsDownCount}</span>
                <button className="task-button right" id="right" onClick={handleMoveClick}>R</button>
            </div>
        </div >
    )
};

export default Task;
