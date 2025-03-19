import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3 className='quicklinks'>Quick Links</h3>
        <ul className='footer-links'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Contact Us</a></li>
        </ul>

        <h3 className='quicklinks mt-3'>Connect With Us</h3>

      </div>
    </footer>
  )
}

export default Footer