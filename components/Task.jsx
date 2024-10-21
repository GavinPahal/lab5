// components/Task.jsx
import React from 'react';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
      />
      <button onClick={() => deleteTask(task.id)} className="remove">Remove</button>
    </div>
  );
}

export default Task;
