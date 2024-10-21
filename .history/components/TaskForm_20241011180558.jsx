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
          marginRight: '0', // No margin to make button flush with input
          padding: '5px', // Padding for input
          borderRadius: '0', // No rounded edges
          border: '1px solid #ccc', // Light border for visibility
        }}
      />
      <button type="submit" className="save" style={{ padding: '5px', borderRadius: '0' }}>
        Save
      </button>
    </form>
  );
}

export default TaskForm;
