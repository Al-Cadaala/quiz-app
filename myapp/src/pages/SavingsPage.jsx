// src/pages/SavingsPage.jsx

import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from '../components/TransactionItem'; // Importing TransactionItem component to render each savings transaction

// Functional component to display a list of savings transactions
const SavingsPage = () => {
  const { transactions } = useContext(TransactionContext); // Access transactions array from TransactionContext

  // Filter transactions to include only those with type 'savings'
  const savingsTransactions = transactions.filter(transaction => transaction.type === 'savings');

  // Render savings page with list of savings transactions
  return (
    <div>
      <h2>Savings</h2>
      <ul className="transaction-list">
        {/* Map through filtered savings transactions and render TransactionItem for each */}
        {savingsTransactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default SavingsPage;