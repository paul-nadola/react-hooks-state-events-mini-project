import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (text, category) => {
    const newTask = { text, category };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories ={CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks={TASKS}/>
    </div>
  );
}

export default App;
