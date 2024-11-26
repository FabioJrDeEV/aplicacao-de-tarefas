import React, { createContext, useEffect, useState } from "react";
export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTaks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTaks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTasks(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function editTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? id : task)));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTasks, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
