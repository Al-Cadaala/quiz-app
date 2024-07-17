// src/services/api.jsx
const API_BASE_URL = 'https://your-api-endpoint.com'; // Replace with your actual API endpoint
// src/services/api.jsx

// Fetch a single transaction by ID
export const fetchTransactionById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/transactions/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch transaction by ID failed:', error);
      throw error;
    }
  };
  
  
// Fetch all transactions

export const fetchTransactions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch transactions failed:', error);
    throw error;
  }
};

// Add a new transaction
export const addTransaction = async (transaction) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Add transaction failed:', error);
    throw error;
  }
};

// Update an existing transaction
export const updateTransaction = async (id, updatedTransaction) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTransaction),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Update transaction failed:', error);
    throw error;
  }
};

// Delete a transaction
export const deleteTransaction = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return true;
  } catch (error) {
    console.error('Delete transaction failed:', error);
    throw error;
  }
};



