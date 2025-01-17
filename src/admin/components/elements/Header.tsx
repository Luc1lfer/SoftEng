import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Tracking</h1>
      <input type="text" placeholder="Search product, supplier, order" />
      <div className="profile">
        <span>Sumting W.</span>
        <img src="/profile.jpg" alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;