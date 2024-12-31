import React from 'react';
import './Login.css';
import Navbar from './Navbar'; 

const Login = () => {
  return (
    <>
      
      <div className="container cont text-center shadow">
        <div className="row">
          <div className="col-12">
            <div className="sign">Login</div>
            <div className="underline"></div>
            <div className="inputs">
              <div className="input">
                <img
                  src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735568388/mail_m3bcwk.png"
                  alt="email-icon"
                />
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input">
                <img
                  src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735568388/padlock_mondhw.png"
                  alt="password-icon"
                />
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>
            <div className="submit d-flex flex-row justify-content-center">
              <button className="btn btn-outline-primary mx-2 but">Login</button>
              <button className="btn btn-outline-secondary mx-2 but">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;