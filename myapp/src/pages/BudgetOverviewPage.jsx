// src/pages/BudgetOverviewPage.jsx

import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

// Functional component to display budget overview based on transactions
const BudgetOverviewPage = () => {
  const { transactions } = useContext(TransactionContext); // Access transactions array from TransactionContext

  // Calculate total income by summing amounts of transactions where amount > 0
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);

  // Calculate total expenses by summing amounts of transactions where amount < 0
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);

  // Calculate total savings as the sum of total income and total expenses
  const savings = totalIncome + totalExpenses;

  // Render budget overview with total income, total expenses, and total savings
  return (
    <div>
      <h2>Budget Overview</h2>
      <div>
        <p>Total Income: ${totalIncome.toFixed(2)}</p> {/* Display total income formatted to two decimal places */}
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p> {/* Display total expenses formatted to two decimal places */}
        <p>Total Savings: ${savings.toFixed(2)}</p> {/* Display total savings formatted to two decimal places */}
      </div>
    </div>
  );
};

export default BudgetOverviewPage;