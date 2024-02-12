// Main component to integrate all components.

import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import FilterTasks from "./FilterTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  const markTasksCompleted = (taskId) => {
    setTasks(
      tasks.reduce((acc, cur) => {
        if (cur.id == taskId)
          acc.push({ id: cur.id, title: cur.title, status: "Completed" });
        else acc.push(cur);
        return acc;
      }, [])
    );
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <FilterTasks onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} markCompleted={markTasksCompleted} />
    </div>
  );
};

export default App;
