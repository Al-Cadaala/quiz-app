// src/pages/ExpensesPage.jsx

import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from '../components/TransactionItem'; // Importing TransactionItem component to render each expense transaction

// Functional component to display a list of expense transactions
const ExpensesPage = () => {
  const { transactions } = useContext(TransactionContext); // Access transactions array from TransactionContext

  // Filter transactions to include only those with type 'expense'
  const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense');

  // Render expenses page with list of expense transactions
  return (
    <div>
      <h2>Expenses</h2>
      <ul className="transaction-list">
        {/* Map through filtered expense transactions and render TransactionItem for each */}
        {expenseTransactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesPage;