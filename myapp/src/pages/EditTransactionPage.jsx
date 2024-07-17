// src/pages/EditTransactionPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import AddTransactionForm from '../components/AddTransactionForm';


const EditTransactionPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Transaction</h2>
      <AddTransactionForm transactionId={id} />
    </div>
  );
};

export default EditTransactionPage;
