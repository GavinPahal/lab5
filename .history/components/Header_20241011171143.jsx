// components/Header.jsx
import React from 'react';

function Header({ pendingTasksCount }) {
  return (
    <header>
      <h1>Day Planner</h1>
      <h2>{pendingTasksCount} tasks remaining</h2>
    </header>
  );
}

export default Header;
