import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">

        {/* LEFT : CONTACT INFO */}
        <div className="contact-info">
          <h3>RK READY-MIX CONCRETE</h3>

          <p>
            Jonnada, Bodametlapalem,<br />
            Andhra Pradesh – 531162
          </p>

          <div className="contact-details">
            <p>📞 <a href="tel:8977011172">8977011173</a></p>
            <p>📞 <a href="tel:8977011173">8977011172</a></p>
            <p>📞 <a href="tel:8977011172">8977011174</a></p>
            <p>📞 <a href="tel:8977011173">8977011179</a></p>

          </div>
        </div>

        {/* RIGHT : MAP */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2254749492763!2d83.40409937541693!3d18.014736682983475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be3634a0ffd3f%3A0xc5bb8c0c6988de15!2sRK%20READY-MIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1767765729442!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RK Ready Mix Concrete Location"
          ></iframe>
        </div>

      </div>

    </section>
  );
};

export default Contact;
