import React from "react";

function NewTaskForm({categories}) {
    const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" >
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
