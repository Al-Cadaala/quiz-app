// src/context/TransactionContext.jsx

import React, { createContext, useState } from 'react';

// Create the context
export const TransactionContext = createContext();

// TransactionProvider component manages transactions state and provides it through context
const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction to the transactions state
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to delete a transaction by ID
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Function to clear all transactions
  const clearTransactions = () => {
    setTransactions([]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, clearTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;