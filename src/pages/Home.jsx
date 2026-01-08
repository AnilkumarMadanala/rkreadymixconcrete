import React, { useEffect, useState } from "react";
import "../styles/home.css";

import slide1 from "../assets/hero/rkslide-1.webp";
import slide2 from "../assets/hero/rkslide-2.webp";
import slide3 from "../assets/hero/rkslide-3.webp";
import slide4 from "../assets/hero/rkslide-4.webp";

const slides = [
  {
    img: slide1,
    title: "WELCOME TO RK RMC",
    subtitle: "Where Quality Meets Durability",
    desc: "Strength, Quality & Trust with Quick Delivery",
  },
  {
    img: slide2,
    title: "PREMIUM READY MIX CONCRETE",
    subtitle: "Built for Long Life",
    desc: "Advanced technology & consistent quality",
  },
  {
    img: slide3,
    title: "TRUSTED CONCRETE SOLUTIONS",
    subtitle: "For Every Construction Need",
    desc: "Residential, Commercial & Industrial projects",
  },
  {
    img: slide4,
    title: "ON-TIME DELIVERY",
    subtitle: "Right Mix. Right Time.",
    desc: "Reliable logistics with professional service",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const location = e.target.location.value;
    const requirement = e.target.requirement.value;

    const message = `*Free Site Visit Request*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Location: ${location}%0A
Requirement: ${requirement}`;

    window.open(
      `https://wa.me/918977011173?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="hero" id="home">
      <div
        className="slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.img} alt={slide.title} />

            {/* Overlay Content */}
            <div className="hero-overlay">
              <h1>{slide.title}</h1>
              <h3>{slide.subtitle}</h3>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
          
        ))}
        {/* CONSTRUCTION SUPPLY SCROLLER */}


      </div>
      <section className="supply-section">


  <div className="supply-scroller">
    <div className="supply-track">
      <div className="supply-item">🏢 Apartments</div>
      <div className="supply-item">🏘️ Communities</div>
      <div className="supply-item">🏠 Individual Houses</div>
      <div className="supply-item">🏫 Colleges</div>
      <div className="supply-item">🏥 Hospitals</div>
      <div className="supply-item">🛕 Temples</div>
      <div className="supply-item">🛍️ Shopping Malls</div>
      <div className="supply-item">🛣️ CC Roads</div>

      {/* DUPLICATE FOR SMOOTH LOOP */}
      <div className="supply-item">🏢 Apartments</div>
      <div className="supply-item">🏘️ Communities</div>
      <div className="supply-item">🏠 Individual Houses</div>
      <div className="supply-item">🏫 Colleges</div>
      <div className="supply-item">🏥 Hospitals</div>
      <div className="supply-item">🛕 Temples</div>
      <div className="supply-item">🛍️ Shopping Malls</div>
      <div className="supply-item">🛣️ CC Roads</div>
    </div>
  </div>

  
</section>
return (
    <>
      {/* FLOATING BUTTONS */}
      <div className="floating-buttons">
        <button className="site-visit-btn" onClick={() => setOpen(true)}>
          🏗️ Free Site Visit
        </button>

        <a
          href="https://wa.me/918977011173?text=Hi%20RK%20RMC!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          className="whatsapp-btn"
          rel="noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* SITE VISIT FORM */}
      {open && (
        <div className="site-visit-overlay">
          <div className="site-visit-form">
            <h3>Free Site Visit</h3>

            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" required />
              <input name="phone" placeholder="Phone Number" required />
              <input name="location" placeholder="Site Location" required />
              <textarea
                name="requirement"
                placeholder="Your Requirement"
                required
              ></textarea>

              <button type="submit">Submit to WhatsApp</button>
              <span onClick={() => setOpen(false)}>Cancel</span>
            </form>
          </div>
        </div>
      )}
    </>
  );

      
    </section>
    
  );
};

export default Home;
