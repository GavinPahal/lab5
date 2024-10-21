// components/Header.jsx
import React from 'react';

function Header({ pendingTasksCount }) {
  return (
    <h2>{pendingTasksCount} tasks remaining</h2>
  );
}

export default Header;
