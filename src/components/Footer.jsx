import React from "react";
import "../styles/footer.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col brand">
          <h3>RK READY-MIX CONCRETE</h3>
          <p>
            Strength • Quality • Trust <br />
            Premium Ready-Mix Concrete for all construction needs.
          </p>

          <div className="footer-actions">
            <a href="tel:8977011173" className="call-btn">
              <FaPhoneAlt /> Call Now
            </a>
            {/* <a
              href="https://wa.me/918977011173"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp /> WhatsApp
            </a> */}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#plants">Plants</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Ready Mix Concrete</li>
            <li>Concrete Pumping</li>
            <li>Transit Mixer Supply</li>
            <li>Quality Testing</li>
            <li>Bulk Supply</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <FaMapMarkerAlt /> Jonnada, Bodametlapalem, <br />
            Andhra Pradesh – 531162
          </p>
          <p><FaPhoneAlt /> 8977011173</p>
          <p><FaPhoneAlt /> 8977011172</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaMapMarkerAlt /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} RK Ready-Mix Concrete. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
