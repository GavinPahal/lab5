// components/TaskList.jsx
import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

