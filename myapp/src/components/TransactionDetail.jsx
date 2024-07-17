// src/components/TransactionDetail.jsx

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams from React Router to get URL parameters
import { TransactionContext } from '../context/TransactionContext'; // Importing TransactionContext to access transactions state
import { fetchTransactionById } from '../services/api'; // Assuming you have an endpoint for fetching a single transaction

const TransactionDetail = () => {
  const { id } = useParams(); // Extracting id parameter from URL using useParams hook
  const { transactions } = useContext(TransactionContext); // Accessing transactions array from TransactionContext
  const [transaction, setTransaction] = useState(null); // State to hold the transaction detail
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Effect hook to fetch transaction details based on id
  useEffect(() => {
    const fetchTransaction = async () => {
      setLoading(true); // Set loading state to true while fetching data

      // Check if transaction with id exists in local state
      const localTransaction = transactions.find(t => t.id === id);
      if (localTransaction) {
        setTransaction(localTransaction); // Set transaction from local state if found
        setLoading(false); // Set loading state to false after setting transaction
      } else {
        try {
          // Fetch transaction details from API using fetchTransactionById function
          const fetchedTransaction = await fetchTransactionById(id);
          setTransaction(fetchedTransaction); // Set transaction with fetched data
        } catch (error) {
          console.error('Error fetching transaction:', error); // Log error if fetch fails
        } finally {
          setLoading(false); // Set loading state to false after fetch operation
        }
      }
    };

    fetchTransaction(); // Call fetchTransaction function when component mounts or id/transactions change
  }, [id, transactions]); // Dependencies array ensures useEffect runs when id or transactions change

  // Render loading message if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render message if transaction is not found
  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  // Render transaction detail if data is loaded and transaction exists
  return (
    <div className="transaction-detail">
      <h2>Transaction Detail</h2>
      <div className="transaction-detail-item">
        <p><strong>ID:</strong> {transaction.id}</p>
        <p><strong>Type:</strong> {transaction.type}</p>
        <p><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</p>
        <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {transaction.description}</p>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};

export default TransactionDetail;