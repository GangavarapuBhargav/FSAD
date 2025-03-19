import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>
        <p className="subtitle">Join us by filling in your details</p>
        
        <form className="register-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          
          <div className="terms">
            <label>
              <input type="checkbox" required /> I agree to the terms and conditions
            </label>
          </div>
          
          <button type="submit" className="register-button">Sign Up</button>
          
          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
