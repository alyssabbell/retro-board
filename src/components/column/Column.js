import React, { useState } from 'react';
import Task from '../task/Task.js';
import "./Column.css";

const Column = (props) => {
   // const [addClicked, setAddClicked] = useState(false);
    // use this state to hold the list of Tasks from each task component
    const [taskList, setTaskList] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    
    // const handleTaskChange = (e) => {
    //     //alert("handleChange Reached");
    //      const newList = [
    //          ...taskList, ""]
    //     setTaskList(newList);
    // };

    // const addTask = () => {
    //      return (
    //      <div>
    //             <Task taskList={taskList} setTaskList={setTaskList} />
    //         </div>
    //      )
    // };

   // console.log(clickCount);
   const addClicks = () => {
    setClickCount(clickCount+1);
   }
    // console.log(clickCount);
    return (
        <div className="column">
            <h2 className="col-header">{props.header}</h2>
            <button className="add-button" type="button" onClick={addClicks}>+</button>
 
          {  [...Array(clickCount)].map((item, index) => {
              
              return (<div> 
                        <Task taskList={taskList} setTaskList={setTaskList} key={index}/> 
                    </div>
              )
          })           
        }       
        </div>
    )
};

export default Column;     

