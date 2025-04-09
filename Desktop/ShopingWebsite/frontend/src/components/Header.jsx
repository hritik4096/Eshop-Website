import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"><span style={{color:"blue"}}>E</span>shop</div>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;