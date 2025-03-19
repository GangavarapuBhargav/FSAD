import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="subtitle">Please enter your details</p>
        
        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">Sign In</button>
          
          <p className="signup-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;