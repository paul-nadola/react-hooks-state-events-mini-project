import React, { useState } from "react";
// const textInput = document.getElementById("text")
// const categoryInput = document.getElementById("category")

function NewTaskForm({categories, tasks}) {
  const[text, setText] =useState('')
  const [task, setNewTasks] = useState(tasks);
  const [category, setCategory] = useState(categories[0]);
    const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  function handleSubmit(e){
    e.preventDefault()
    
    const newTask = {
      text: e.target.text.value,
      category: e.target.category.value
    };
    console.log(newTask)
    const newTasks =  [...tasks, newTask]
    setNewTasks(newTasks);
    
    setText('')
    setCategory(categories[0])

  
  } 


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input id="text" type="text" name="text" value= {text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select id ="category" name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
