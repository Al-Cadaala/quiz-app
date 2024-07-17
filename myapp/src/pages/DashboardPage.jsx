//src/components/Dashboard.jsx

import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

// Functional component to display dashboard summary based on transaction types
const Dashboard = () => {
  const { transactions } = useContext(TransactionContext); // Access transactions array from TransactionContext

  // Calculate total income by summing amounts of transactions with type 'income'
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calculate total expenses by summing amounts of transactions with type 'expense'
  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calculate total savings by summing amounts of transactions with type 'savings'
  const totalSavings = transactions
    .filter(transaction => transaction.type === 'savings')
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Render dashboard with summary of total income, expenses, and savings
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="summary">
        <div className="summary-item">
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p> {/* Display total income formatted to two decimal places */}
        </div>
        <div className="summary-item">
          <h3>Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p> {/* Display total expenses formatted to two decimal places */}
        </div>
        <div className="summary-item">
          <h3>Total Savings</h3>
          <p>${totalSavings.toFixed(2)}</p> {/* Display total savings formatted to two decimal places */}
        </div>
      </div>
      {/* Additional components or charts can be added here */}
    </div>
  );
};

export default Dashboard;