import React from 'react';
import './App.css';
import './Navbar.css';
import Navroutes from './Routes/Navroutes';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <Link to="/">
          <a className="navbar-brand" href="#">
            <img
              src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735230089/search_lycgt6.png"
              className="logo"
              alt="Logo"
            />
            <span className="head">Job</span> Platform
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
             <Link to= '/login' className='btn btn-outline-primary '>Login</Link>
             <Link to='/register' className='btn btn-outline-primary'>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;