import React, { useState } from "react";

function Task(props) {
  const [visible, setVisible] = useState(true);
  const handleClick = () =>{
    setVisible(false)
  }
  return ( 
    visible &&
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
