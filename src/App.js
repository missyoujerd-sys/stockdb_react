import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import StockReceiving from './components/Stock/StockReceiving';
import StockList from './components/Stock/StockList';
import StockDispatch from './components/Stock/StockDispatch';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stock-receiving"
            element={
              <ProtectedRoute>
                <StockReceiving />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stock-list"
            element={
              <ProtectedRoute>
                <StockList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stock-dispatch"
            element={
              <ProtectedRoute>
                <StockDispatch />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
