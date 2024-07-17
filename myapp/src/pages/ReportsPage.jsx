// src/pages/ReportsPage.jsx

import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

// Functional component to display financial reports based on transactions
const ReportsPage = () => {
  const { transactions } = useContext(TransactionContext); // Access transactions array from TransactionContext

  // Calculate total income by summing amounts of transactions where amount > 0
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);

  // Calculate total expenses by summing amounts of transactions where amount < 0
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);

  // Calculate balance as the sum of total income and total expenses
  const balance = totalIncome + totalExpenses;

  // Render reports page with financial overview
  return (
    <div>
      <h2>Reports</h2>
      <div className="reports">
        <h3>Financial Overview</h3>
        <div>Total Income: ${totalIncome.toFixed(2)}</div> {/* Display total income formatted to two decimal places */}
        <div>Total Expenses: ${totalExpenses.toFixed(2)}</div> {/* Display total expenses formatted to two decimal places */}
        <div>Balance: ${balance.toFixed(2)}</div> {/* Display balance formatted to two decimal places */}
      </div>
    </div>
  );
};

export default ReportsPage