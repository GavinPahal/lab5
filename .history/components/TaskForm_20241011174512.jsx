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
        onChange={(e) => setTaskName(e.target.value)}
        style={{ flex: 1, marginRight: '5px' }} // Flex to take remaining space
      />
      <button type="submit" className="save">Save</button>
    </form>
  );
}

export default TaskForm;
