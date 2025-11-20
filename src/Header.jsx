import React from 'react';
import './Header.css';

const Header = () => {
    return (
   <header className="header">
      <div className="logo">
        <span className="logo-text">YF Studios</span>
      </div>
      <nav>
        <ul className="nav-links">
          <button>About us</button>
          <button>Projects</button>
          <button>Courses</button>
          <button>Contact</button>
        </ul>
      </nav>
      {/* <div className="cta">
        
      </div> */}
    </header>
    );
};

export default Header