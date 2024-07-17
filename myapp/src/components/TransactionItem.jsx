// src/components/TransactionItem.jsx

import React from 'react';

// Functional component to render a single transaction item
const TransactionItem = ({ transaction }) => {
  return (
    <li className="transaction-item">
      <p>Description: {transaction.description}</p> {/* Display transaction description */}
      <p>Amount: ${transaction.amount.toFixed(2)}</p> {/* Display transaction amount formatted to two decimal places */}
      <p>Category: {transaction.category}</p> {/* Display transaction category */}
    </li>
  );
};

export default TransactionItem;