import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.sass';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src="/Logo.png" alt="logo Kasa" />
        </NavLink>
      </div>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Accueil
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        A propos
      </NavLink>
    </nav>
  );
}

export default Navbar;
