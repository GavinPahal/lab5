// components/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="New Task"
        value={taskName}
        onChan
