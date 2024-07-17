// src/components/AddTransactionForm.jsx

import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const AddTransactionForm = () => {
  // Use TransactionContext to access addTransaction function
  const { addTransaction } = useContext(TransactionContext);

  // State variables for form inputs
  const [type, setType] = useState('expense'); // Default transaction type is 'expense'
  const [amount, setAmount] = useState('');    // Amount of the transaction
  const [date, setDate] = useState('');        // Date of the transaction
  const [description, setDescription] = useState('');  // Description of the transaction

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      id: Date.now().toString(),  // Generate unique id based on current timestamp
      type,                       // Type of transaction (expense, income, savings)
      amount: parseFloat(amount), // Convert amount to float for consistency
      date,                       // Date of the transaction
      description                 // Description of the transaction
    };

    // Call addTransaction function from context to add the new transaction
    addTransaction(newTransaction);

    // Reset form fields after submission
    setType('expense');
    setAmount('');
    setDate('');
    setDescription('');
  };

  // Render the form with input fields and submit button
  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div>
        <label>Type:</label>
        {/* Dropdown to select transaction type */}
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        {/* Input field for transaction amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required  // Amount is required
        />
      </div>
      <div>
        <label>Date:</label>
        {/* Input field for transaction date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required  // Date is required
        />
      </div>
      <div>
        <label>Description:</label>
        {/* Input field for transaction description */}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required  // Description is required
        />
      </div>
      {/* Submit button to add the transaction */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;