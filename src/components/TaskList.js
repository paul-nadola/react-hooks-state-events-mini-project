import React from "react";
import Task from "./Task";



function TaskList({tasks}) {
    const taskDisplay = tasks.map((task, index) =>(
    <Task key={index} text={task.text} category ={task.category}/>
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskDisplay}
    </div>
  );
}

export default TaskList;

