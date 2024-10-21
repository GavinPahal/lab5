// components/TaskList.jsx
import React from 'react';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.isCompleted ? 'completed' : ''}`}>
          <span onClick={() => toggleComplete(task.id)} style={{ cursor: 'pointer' }}>
            {task.name}
          </span>
          <button 
            className="remove" 
            onClick={() => deleteTask(task.id)} 
            style={{ marginLeft: '20px' }} // Add space to the left of the remove button
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
