import React from "react";
import "../styles/about.css";

import aboutImg from "../assets/about/about-main.webp";

import client1 from "../assets/clients/client1.webp";
import client2 from "../assets/clients/client2.webp";
import client3 from "../assets/clients/client3.webp";
import client4 from "../assets/clients/client4.webp";
import client5 from "../assets/clients/client5.webp";
import client6 from "../assets/clients/client6.webp";

const clientNames = [
   "Sri Venkateswara Swamy Temple (Balaji Nagar)",
      "Sri Lalitha Constructions (Centurion University)",
      "Siddhivinayaka Constructions (MIMS College)",
      "Lendi Institute of Engineering & Technology",
      "MVGR College of Engineering",
      "Raghu Rama Infra Structures (Raghu College)",
      "Pentapati Vijaya Ramayya",
      "BLR Constructions (B. Lakshmana Rao)",
      "Bhoomatha Group",
      "Manohar Civil Structures",
      "Boda Srinivasa Rao",
      "Itha Adinarayana",
      "Sanjay Infra",
      "Adithya Vardhana Construction",
      "Manikanta Constructions",
      "Surya Estates",
      "KVR Estates",
      "Mithra Estates",
      "Al Falaah Constructions (Ozone Valley)",
      "Siri Infra",
      "Aditya Builders",
      "ABK Ramesh",
      "Bhaskar Constructions (Bhasakar Raju)",
      "Sri Dharani Constructions",
      "Jaitra Constructions",
      "Dinesh Engineering (YSRCP Party Office)",
      "Blue Bay Infra Projects",
      "Ever Green Constructions",
      "J Square Homes",
      "Kalki Engineering Works",
      "Gujjala Narayana Rao",
      "Hanu Builders and Developers",
      "IRP Infra Tech Pvt Ltd (ECO Railway)",
      "Jayadeep Developers",
      "Sahasra Constructions",
      "K V Raghava Reddy (KVR)",
      "K Srinivasa Reddy (KVR'S)",
      "KL Developers",
      "Vetsa Srinivasa Rao",
      "Kosuru Narayana Rao",
      "Lansum Developers LLP",
      "Manohar Civil Structures",
      "MDR Constructions (ECO Railway)",
      "My Space Builders and Developers",
      "SR Constructions",
      "Chittella Rambabu",
      "RVR Projects Pvt Ltd (Rama College)",
      "S Ganapathi Naidu",
      "Satya Srinivasa Constructions",
      "Shree Nithi Infra Projects",
      "Skyline Developers",
      "Subhang Constructions",
      "Veda Infra Projects",
      "Venugopal Motors Pvt Ltd",
      "SVB Mall",
      "GVK Structural Consultancy",
      "AK Constructions",
      "SSS Constructions",
      "Ever Green Constructions",
      "Sri Rama Murthy",
      "SSP JR College",
      "K V Ramanaraju",
      "Vihaan Constructions",
      "Y Gearr",
      "K&H Builders",
      "Sambhavi Constructions",
      "Naveen Constructions",
      "Sandhya Constructions",
      "Sri Gayatri Builders",
      "Gayatri College (Gotlam)"
];
const reviews = [
  { name: "Sri Venkateswara Temple", rating: 5, comment: "Excellent quality concrete and timely delivery." },
  { name: "MVGR College", rating: 5, comment: "Very professional service and strong concrete quality." },
  { name: "Lendi Institute", rating: 4, comment: "Reliable supply and good coordination." },
  { name: "Raghu Rama Infra", rating: 5, comment: "Best RMC supplier in Vizianagaram." },
  { name: "Pentapati Vijaya Ramayya", rating: 4, comment: "Quality meets expectations every time." },
  { name: "BLR Constructions", rating: 5, comment: "Consistent mix and punctual delivery." },
  { name: "Bhoomatha Group", rating: 4, comment: "Good pricing and strong support team." },
  { name: "Skyline Developers", rating: 5, comment: "Highly recommended for large projects." },
  { name: "SVB Mall", rating: 5, comment: "Professional batching plant and service." },
  { name: "Gayatri College", rating: 4, comment: "Satisfied with strength and finishing." }
];


const About = () => {
  return (
    <section className="about" id="about">

      {/* ABOUT INTRO */}
      <div className="about-container">
        <div className="about-content">
          <h2>About RK RMC</h2>
          <p>
            RK RMC is a trusted name in Ready Mix Concrete, delivering
            high-quality concrete solutions for residential, commercial,
            and industrial projects.
          </p>
          <p>
            With advanced batching plants and experienced professionals,
            we ensure strength, durability, and timely delivery.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="RK RMC Plant" />
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="stat">
          <h3>300+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>1000+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </div>

      {/* OUR CLIENTS */}
      <div className="about-clients">
  <h2>Our Valuable Customers</h2>

  {/* IMAGE GRID (static) */}
  <div className="clients-image-grid">
    <img src={client1} alt="Client" />
    <img src={client2} alt="Client" />
    <img src={client3} alt="Client" />
    <img src={client4} alt="Client" />
    <img src={client5} alt="Client" />
    <img src={client6} alt="Client" />
  </div>

  {/* SCROLLING CLIENT NAMES */}
  <div className="clients-scroll-wrapper">
    <div className="clients-scroll-track">
      {clientNames.concat(clientNames).map((name, index) => (
        <div className="client-scroll-item" key={index}>
          {name}
        </div>
        
      ))}
    </div>
  </div>
  {/* CUSTOMER REVIEWS SCROLLER */}
<div className="reviews-scroller">
  <div className="reviews-track">
    {reviews.concat(reviews).map((review, index) => (
      <div className="review-item" key={index}>
        <h4>{review.name}</h4>

        <div className="review-stars">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>

        <p>{review.comment}</p>
      </div>
    ))}
  </div>
</div>

</div>


    </section>
  );
};

export default About;
