// Component to display a list of tasks.

import React from "react";

const TaskList = ({ tasks, markCompleted }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              onClick={() => {
                markCompleted(task.id);
              }}
            >
              {task.title} - {task.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
