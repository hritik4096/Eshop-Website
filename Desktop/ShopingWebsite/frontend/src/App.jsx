import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <CartProvider>
      {token && <Header />}
      <Routes>
        <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />
        <Route path="/product/:id" element={token ? <ProductDetail /> : <Navigate to="/" />} />
        <Route path="/cart" element={token ? <Cart /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CartProvider>
  );
};

export default App;