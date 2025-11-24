import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">YF</span>
          <span className="logo-text">Studios</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">About us</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
    </div>
    );
};

export default Header