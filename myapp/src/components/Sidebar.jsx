// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/expenses">Expenses</NavLink></li>
        <li><NavLink to="/income">Income</NavLink></li>
        <li><NavLink to="/savings">Savings</NavLink></li>
        <li><NavLink to="/add-transaction">Add Transaction</NavLink></li>
        <li><NavLink to="/reports">Reports</NavLink></li>
        <li><NavLink to="/budget-overview">Budget Overview</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
