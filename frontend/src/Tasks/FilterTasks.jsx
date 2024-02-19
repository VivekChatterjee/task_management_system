// Component to filter tasks by status.

import React from "react";

const FilterTasks = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <h2>Filter Tasks</h2>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterTasks;
