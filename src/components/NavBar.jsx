import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const NavBar = () => {
  return (
    <div className="container">
      <h2 className="heading"></h2>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/veterinary">Veterinary</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
