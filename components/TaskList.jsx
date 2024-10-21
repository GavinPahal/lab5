// components/Task.jsx
import React from 'react';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
      <span onClick={() => toggleComplete(task.id)} style={{ cursor: 'pointer' }}>
        {task.name}
      </span>
      <button 
        className="remove" 
        onClick={() => deleteTask(task.id)} 
        style={{ marginLeft: '20px' }} // Space between the task name and remove button
      >
        Remove
      </button>
    </div>
  );
}

export default Task;
