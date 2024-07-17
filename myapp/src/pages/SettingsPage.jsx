// src/pages/SettingsPage.jsx

import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function SettingsPage() {
  const { transactions, clearTransactions, deleteTransaction } = useContext(TransactionContext);
  const [theme, setTheme] = useState('light'); // State for theme selection

  // Function to handle deletion of a transaction
  const handleDeleteTransaction = (id) => {
    deleteTransaction(id);
  };

  // Function to handle theme change
  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    // You can add further logic to persist the theme selection, e.g., using localStorage
  };

  return (
    <div className={`settings-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <h2 className="settings-header">Settings</h2>
      <p className="settings-subtitle">Manage your app settings and transactions here.</p>

      {/* Transactions Section */}
      <section className="settings-section">
        <h3>Transactions</h3>
        <button className="clear-btn" onClick={clearTransactions}>Clear All Transactions</button>
        <ul className="transactions-list">
          {transactions.map(transaction => (
            <li key={transaction.id} className="transaction-item">
              <span>{transaction.description}</span>
              <span>${transaction.amount}</span>
              <button className="delete-btn" onClick={() => handleDeleteTransaction(transaction.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <hr className="divider" />

      {/* User Settings Section */}
      <section className="settings-section">
        <h3>User Settings</h3>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" className="input-field" placeholder="Enter username" />
        </div>
        <div className="input-group">
          <label>Email Notifications:</label>
          <input type="checkbox" id="emailNotifications" className="checkbox-field" />
          <label htmlFor="emailNotifications" className="checkbox-label">Receive email notifications</label>
        </div>
        {/* Add more user settings as needed */}
      </section>

      <hr className="divider" />

      {/* App Settings Section */}
      <section className="settings-section">
        <h3>App Settings</h3>
        <div className="input-group">
          <label>Theme:</label>
          <select className="select-field" value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="input-group">
          <label>Language:</label>
          <select className="select-field">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="input-group">
          <label>Timezone:</label>
          <select className="select-field">
            <option value="utc-0">UTC+0</option>
            <option value="utc-1">UTC+1</option>
            {/* Add more timezones as needed */}
          </select>
        </div>
        {/* Add more app settings as needed */}
      </section>

      <hr className="divider" />

      {/* Additional sections can be added here for more settings */}

    </div>
  );
}

export default SettingsPage;