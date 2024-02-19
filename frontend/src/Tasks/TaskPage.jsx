import React from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import FilterTasks from "./FilterTasks";
import { useState } from "react";

const TaskPage = () => {
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
        if (cur.id == taskId) {
          const current_status =
            cur.status == "Pending" ? "Completed" : "Pending";
          acc.push({ id: cur.id, title: cur.title, status: current_status });
        } else acc.push(cur);
        return acc;
      }, [])
    );
  };

  return (
    <>
      <h1>Task Management System</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <FilterTasks onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} markCompleted={markTasksCompleted} />
    </>
  );
};

export default TaskPage;
