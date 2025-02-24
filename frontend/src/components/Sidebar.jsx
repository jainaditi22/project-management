import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;