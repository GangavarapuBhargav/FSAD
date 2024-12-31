import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component correctly
import './Register.css';
import './App.css'

const Register = () => {
  return (
    <>
      
      <div className="cont container">
        <div className="row">
          <div className="col-12">
            <div className="sign">Sign Up</div>
            <div className="underline"></div>
            <div className="inputs">
              <div className="input">
                <img
                  src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735568388/user_icon_jfc0gw.png"
                  alt=""
                />
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="input">
                <img
                  src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735568388/mail_m3bcwk.png"
                  alt=""
                />
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input">
                <img
                  src="https://res.cloudinary.com/dlpitkw7i/image/upload/v1735568388/padlock_mondhw.png"
                  alt=""
                />
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>
            <div className="submit d-flex flex-row justify-content-center">
              <button className="btn btn-outline-primary mx-2 but">Sign Up</button>
              <button className="btn btn-outline-secondary mx-2 but">Login</button>
             
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;