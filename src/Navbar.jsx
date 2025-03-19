import React from 'react';
import './App.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Make sure to install react-icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735230089/search_lycgt6.png"
            className="logo"
            alt="Logo"
          />
          <span className="head">E Commerce</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-icon">
                <FaShoppingCart size={20} />
                <span className="cart-count">0</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-primary login-btn">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;