// src/pages/AddTransactionPage.jsx

import React from 'react';
import AddTransactionForm from '../components/AddTransactionForm'; // Importing AddTransactionForm component to add new transactions

// Functional component to render add transaction page
const AddTransactionPage = () => {
  return (
    <div>
      <h2>Add Transaction</h2>
      <AddTransactionForm /> {/* Render AddTransactionForm component for adding new transactions */}
    </div>
  );
};

export default AddTransactionPage;