import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Header = () => {
  return (
    <div className="container">
      <h2 className="heading"></h2>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/Login">LOGIN</Link>
          </li>
          <li>
            <Link to="/Register">REGISTER</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
