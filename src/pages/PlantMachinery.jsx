import React from "react";
import "../styles/plantMachinery.css";

import plantMain from "../assets/hero/rkslide-2.webp";
import pumpImg from "../assets/hero/rkslide-8.jpeg";
import transitImg from "../assets/hero/rkslide-5.webp";
import labImg from "../assets/hero/rkslide-9.jpeg";

const Plants = () => {
  return (
<section className="plants" id="plants">
      <h2 className="plants-title">Plant & Machinery</h2>

      {/* ROW 1 */}
      <div className="plant-row">
        <div className="plant-image">
          <img src={plantMain} alt="Batching Plant" />
        </div>
        <div className="plant-text">
          <h3>Batching Plant</h3>
          <p>
            CP-30 Inline Silo (2021) fully automated and computerized batching
            plant with a capacity of <strong>30 m³/hour</strong>.
          </p>
          <p>
            Maximum supply capacity of <strong>550 m³ per day</strong>.
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="plant-row reverse">
        <div className="plant-text">
          <h3>Concrete Pumps</h3>
          <p>
            Schwing Stetter SP 1200 RMC concrete pumps with
            high pumping efficiency.
          </p>
          <p>
            Capacity up to <strong>100m vertical</strong> and
            <strong> 150m horizontal</strong>.
          </p>
        </div>
        <div className="plant-image">
          <img src={pumpImg} alt="Concrete Pump" />
        </div>
      </div>

      {/* ROW 3 */}
      <div className="plant-row">
        <div className="plant-image">
          <img src={transitImg} alt="Transit Mixers" />
        </div>
        <div className="plant-text">
          <h3>Transit Mixers</h3>
          <p>
            Fleet of <strong>9 transit mixers</strong> ensuring
            timely and continuous concrete delivery.
          </p>
        </div>
      </div>

      {/* LAB & QUALITY */}
      <h2 className="plants-title">Quality & Laboratory</h2>

      <div className="plant-row">
        <div className="plant-image">
          <img src={labImg} alt="Quality Control Lab" />
        </div>
        <div className="plant-text">
          <p>
            Ready Mix Concrete ensures speed, strength, and consistency
            with strict quality control.
          </p>
          <p>
            We use <strong>OPC 53 grade cement</strong> and
            <strong> natural river sand</strong>.
          </p>
          <p>
            Concrete grades supplied from <strong>M5 to M40</strong>
            for all construction needs.
          </p>
          <p>
            A fully equipped laboratory tests concrete cubes and
            raw materials to maintain superior quality.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Plants;
