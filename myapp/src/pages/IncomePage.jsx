// src/pages/IncomePage.jsx

import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionList from '../components/TransactionList'; // Importing TransactionList component to render list of income transactions

// Functional component to display a list of income transactions
const IncomePage = () => {
  const { transactions } = useContext(TransactionContext); // Access transactions array from TransactionContext

  // Filter transactions to include only those with type 'income'
  const incomeTransactions = transactions.filter(transaction => transaction.type === 'income');

  // Render income page with list of income transactions or message if none found
  return (
    <div className="container">
      <header className="header">
        <h4>Income</h4>
      </header>
      <div className="main-content">
        {incomeTransactions.length > 0 ? (
          <TransactionList transactions={incomeTransactions} /> // Render TransactionList with filtered income transactions
        ) : (
          <p>No income transactions found.</p> // Display message if no income transactions exist
        )}
      </div>
    </div>
  );
};

export default IncomePage;