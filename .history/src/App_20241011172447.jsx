// src/App.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import './App.css';

function App() {
  // Initial state with predefined tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", isCompleted: false },
    { id: 2, name: "Walk the dog", isCompleted: true },
    { id: 3, name: "Finish project", isCompleted: false },
  ]);

  // Add a new task
  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, isCompleted: false }]);
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Remove a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Count of pending tasks
  const pendingTasksCount = tasks.filter((task) => !task.isCompleted).length;

  return (
    <div className="app">
      <Header pendingTasksCount={pendingTasksCount} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
