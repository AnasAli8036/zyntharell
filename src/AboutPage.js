import React from "react";
import "./App.css";

const milestones = [
  { year: "2021", text: "Zyntharell founded with a vision to serve across industries" },
  { year: "2022", text: "Launched national operations in DME & Freight Forwarding" },
  { year: "2023", text: "Expanded into e-commerce and software development" },
  { year: "2024", text: "Crossed 100+ B2B clients and initiated international shipping" },
  { year: "2025", text: "Launching cloud-based logistics platform and mobile DME app" },
];

const AboutPage = () => (
  <section className="about-page section-animate">
    <div className="about-header">
      <span className="about-badge">🟢 About Us</span>
      <h1 className="about-title">Driven by Innovation, Powered by Purpose</h1>
      <p className="about-lead">
        Welcome to <span className="about-highlight">Zyntharell</span> — where technology, logistics, healthcare, and commerce come together to shape a smarter, connected future.<br/>
        We're a bold and forward-thinking Pakistani company committed to delivering world-class services across four core sectors: <b>Durable Medical Equipment (DME)</b>, <b>Freight Forwarding</b>, <b>E-commerce</b>, and <b>Software Development</b>.
      </p>
    </div>

    <div className="about-section">
      <h2>🌍 Our Story</h2>
      <p>
        Founded with a mission to make an impact across essential industries, Zyntharell has quickly grown into a trusted name in innovation and service delivery. What started as a small team with a big vision is now a diversified organization empowering clients across Pakistan and beyond.<br/><br/>
        We believe in solving real-world challenges through integrated services, smart systems, and a people-first approach. Whether it’s delivering life-saving medical equipment, powering global shipments, creating powerful online platforms, or building custom software — Zyntharell delivers with purpose.
      </p>
    </div>

    <div className="about-section">
      <h2>🎯 Our Mission</h2>
      <p>
        To deliver reliable, scalable, and intelligent solutions that enhance lives, empower businesses, and contribute to sustainable growth across healthcare, logistics, commerce, and technology.
      </p>
      <h2>👁️ Our Vision</h2>
      <p>
        To become a global leader in multi-sector service innovation — trusted for our integrity, admired for our excellence, and recognized for the positive impact we create.
      </p>
    </div>

    <div className="about-section about-services">
      <h2>🛠️ What We Do</h2>
      <div className="about-services-list">
        <div className="about-service-card"><span>🏥</span><b> Durable Medical Equipment (DME)</b><br/>Providing high-quality medical equipment and home care solutions that enhance patient well-being and support healthcare providers.</div>
        <div className="about-service-card"><span>🚚</span><b> Freight Forwarding</b><br/>Enabling safe, efficient, and cost-effective transport of goods across the globe with end-to-end logistics and compliance solutions.</div>
        <div className="about-service-card"><span>🛒</span><b> E-commerce Solutions</b><br/>Designing and managing custom e-commerce platforms that drive digital trade, customer engagement, and business growth.</div>
        <div className="about-service-card"><span>💻</span><b> Software Development</b><br/>Creating smart, scalable, and secure software solutions tailored to your business needs — from mobile apps to enterprise systems.</div>
      </div>
    </div>

    <div className="about-section about-values">
      <h2>💡 Our Core Values</h2>
      <ul className="about-values-list">
        <li><b>Integrity:</b> We do the right thing — always.</li>
        <li><b>Innovation:</b> We evolve with technology to stay ahead.</li>
        <li><b>Customer Focus:</b> Our clients are at the center of everything we do.</li>
        <li><b>Collaboration:</b> Great things happen when we work together.</li>
        <li><b>Excellence:</b> We deliver more than expected, every time.</li>
        <li><b>Responsibility:</b> We care about our people, partners, and planet.</li>
      </ul>
    </div>

    <div className="about-section about-milestones">
      <h2>🏆 Milestones & Achievements</h2>
      <ul className="about-milestones-list">
        {milestones.map((m, i) => (
          <li key={m.year} style={{ animationDelay: `${0.2 + i * 0.12}s` }} className="about-milestone-item section-animate">
            <span className="about-milestone-year">{m.year}:</span> {m.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutPage;
