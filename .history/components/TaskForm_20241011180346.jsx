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
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <input
        type="text"
        placeholder="New Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={{
          flex: 1, // Take remaining space
          marginRight: '10px', // Space between input and button
          padding: '5px', // Padding for the input
        }}
      />
      <button type="submit" className="save" style={{ width: '80px', padding: '5px' }}>
        Save
      </button>
    </form>
  );
}

export default TaskForm;
