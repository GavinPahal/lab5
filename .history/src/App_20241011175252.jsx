// App.jsx (modified)
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', isCompleted: false },
    { id: 2, name: 'Task 2', isCompleted: false },
    { id: 3, name: 'Task 3', isCompleted: false },
  ]);

  const addTask = (name) => {
    const newTask = { id: tasks.length + 1, name, isCompleted: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const remainingTasks = tasks.filter((task) => !task.isCompleted).length;

  return (
    <div className="app">
      <TaskForm addTask={addTask} />
      <h2>{remainingTasks} tasks remaining</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task
