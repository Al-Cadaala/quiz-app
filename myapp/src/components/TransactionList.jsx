// src/components/TransactionList.jsx

import React from 'react';
import TransactionItem from './TransactionItem'; // Importing TransactionItem component to render each transaction

// Functional component to render a list of transactions
const TransactionList = ({ transactions }) => {
  return (
    <ul className="transaction-list">
      {/* Map through transactions array and render TransactionItem for each transaction */}
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default TransactionList;