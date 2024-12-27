import React from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./Navbar.sass";



function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
           <NavLink to="/"><img src="/Logo.png" alt="logo Kasa" /></NavLink>
        </div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">
        <div>A propos</div>
        </NavLink>
    </nav>
  )
}

export default Navbar
