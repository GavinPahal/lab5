// src/App.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", isCompleted: false },
    { id: 2, name: "Task 2", isCompleted: false },
    { id: 3, name: "Task 3", isCompleted: false },
  ]);

  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, isCompleted: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
