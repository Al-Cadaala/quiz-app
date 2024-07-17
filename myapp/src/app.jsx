import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ExpensesPage from './pages/ExpensesPage';
import IncomePage from './pages/IncomePage';
import SavingsPage from './pages/SavingsPage';
import AddTransactionPage from './pages/AddTransactionPage';
import EditTransactionPage from './pages/EditTransactionPage';
import ReportsPage from './pages/ReportsPage';
import BudgetOverviewPage from './pages/BudgetOverviewPage';
import SettingsPage from './pages/SettingsPage';
import TransactionDetail from './components/TransactionDetail';
import TransactionProvider from './context/TransactionContext';
import './App.css';

const App = () => {
  return (
    <TransactionProvider>
      <Router>
        <div>
          <Header />
          <Sidebar />
          <div className="main-content">
            <div className="container">
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/income" element={<IncomePage />} />
                <Route path="/savings" element={<SavingsPage />} />
                <Route path="/add-transaction" element={<AddTransactionPage />} />
                <Route path="/edit-transaction/:id" element={<EditTransactionPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/budget-overview" element={<BudgetOverviewPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/transaction/:id" element={<TransactionDetail />} />
                <Route path="/" element={<DashboardPage />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </TransactionProvider>
  );
};

export default App;
