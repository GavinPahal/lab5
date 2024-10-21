// components/Task.jsx
import React from 'react';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.name}</span>
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default Task;
