import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo/logo1.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
   <div className="navbar-logo">
  <a href="#home" onClick={closeMenu}>
    <img src={logo} alt="RK Ready Mix Concrete" />
    <div className="logo-text">
      <span className="logo-title">RK RMC</span>
      <span className="logo-subtitle">VIZIANAGARAM</span>
    </div>
  </a>
</div>



      {/* NAV LINKS */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Us</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#plants" onClick={closeMenu}>Plants</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* CALL BUTTON - DESKTOP */}
      <div className="navbar-call desktop-call">
        <a href="tel:8977011172">📞 Call Now</a>
      </div>

      {/* CALL ICON - MOBILE */}
      <div className="navbar-call mobile-call">
        <a href="tel:8977011172">📞</a>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
