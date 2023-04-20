import React, { useState } from "react";

function CategoryFilter({categories}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
 
  const handleFilter = ( category) => {
    
    setSelectedCategory(category);
  };

  const catBut = categories.map((category, index) => {
    const classSet = selectedCategory === category ? "selected" : "";
    return (
      <button
        key={index}
        onClick={() => handleFilter(category)}
        className={classSet}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBut}
    </div>
  );
}

export default CategoryFilter;

