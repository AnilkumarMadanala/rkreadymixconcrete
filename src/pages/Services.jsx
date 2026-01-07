import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          RK RMC provides reliable ready mix concrete solutions with quality,
          precision, and timely delivery.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <span className="service-icon">🏗️</span>
          <h3>Ready Mix Concrete</h3>
          <p>
            High-quality concrete for residential, commercial, and industrial
            construction projects.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">🚧</span>
          <h3>Concrete Pumping</h3>
          <p>
            Efficient concrete pumping solutions for high-rise and complex
            construction sites.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">🚚</span>
          <h3>On-Time Delivery</h3>
          <p>
            Reliable delivery with modern transit mixers to meet tight project
            schedules.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">🧪</span>
          <h3>Quality Control</h3>
          <p>
            Strict quality testing ensures strength, durability, and consistency
            in every batch.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">⚙️</span>
          <h3>Custom Mix Design</h3>
          <p>
            Concrete mix designs customized as per structural and site
            requirements.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">👷</span>
          <h3>Technical Support</h3>
          <p>
            Expert technical assistance from experienced professionals throughout
            the project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
