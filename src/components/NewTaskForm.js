// import React from "react";

// function NewTaskForm({categories}) {
//     const categoryOptions = categories
//     .filter((category) => category !== "All")
//     .map((category, index) => (
//       <option key={index} value={category}>
//         {category}
//       </option>
//     ));
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category" >
//           {/* render <option> elements for each category here */}
//           {categoryOptions}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(text, category);
    setText("");
    setCategory(categories[0]);
  };

  const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

