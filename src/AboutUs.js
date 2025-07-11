import React from "react";
import "./App.css";

const milestones = [
  { year: "2021", text: "Zyntharell founded with a vision to serve across industries" },
  { year: "2022", text: "Launched national operations in DME & Freight Forwarding" },
  { year: "2023", text: "Expanded into e-commerce and software development" },
  { year: "2024", text: "Crossed 100+ B2B clients and initiated international shipping" },
  { year: "2025", text: "Launching cloud-based logistics platform and mobile DME app" },
];

const services = [
  {
    icon: "🏥",
    title: "Durable Medical Equipment (DME)",
    desc: "Providing high-quality medical equipment and home care solutions that enhance patient well-being and support healthcare providers."
  },
  {
    icon: "🚚",
    title: "Freight Forwarding",
    desc: "Enabling safe, efficient, and cost-effective transport of goods across the globe with end-to-end logistics and compliance solutions."
  },
  {
    icon: "🛒",
    title: "E-commerce Solutions",
    desc: "Designing and managing custom e-commerce platforms that drive digital trade, customer engagement, and business growth."
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Creating smart, scalable, and secure software solutions tailored to your business needs — from mobile apps to enterprise systems."
  }
];

const values = [
  { label: "Integrity", desc: "We do the right thing — always." },
  { label: "Innovation", desc: "We evolve with technology to stay ahead." },
  { label: "Customer Focus", desc: "Our clients are at the center of everything we do." },
  { label: "Collaboration", desc: "Great things happen when we work together." },
  { label: "Excellence", desc: "We deliver more than expected, every time." },
  { label: "Responsibility", desc: "We care about our people, partners, and planet." },
];

const AboutUs = () => (
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
        Founded with a mission to make an impact across essential industries, Zyntharell has quickly grown into a trusted name in innovation and service delivery. What started as a small team with a big vision is now a diversified organization empowering clients across Pakistan and beyond.
      </p>
      <p>
        We believe in solving real-world challenges through integrated services, smart systems, and a people-first approach. Whether it’s delivering life-saving medical equipment, powering global shipments, creating powerful online platforms, or building custom software — Zyntharell delivers with purpose.
      </p>
    </div>

    <div className="about-section about-mission-vision">
      <div className="about-mission">
        <h2>🎯 Our Mission</h2>
        <p>
          To deliver reliable, scalable, and intelligent solutions that enhance lives, empower businesses, and contribute to sustainable growth across healthcare, logistics, commerce, and technology.
        </p>
      </div>
      <div className="about-vision">
        <h2>👁️ Our Vision</h2>
        <p>
          To become a global leader in multi-sector service innovation — trusted for our integrity, admired for our excellence, and recognized for the positive impact we create.
        </p>
      </div>
    </div>

    <div className="about-section about-services">
      <h2>🛠️ What We Do</h2>
      <div className="about-services-cards">
        {services.map((s, i) => (
          <div className="about-service-card section-animate" key={s.title} style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
            <div className="about-service-icon">{s.icon}</div>
            <div className="about-service-title">{s.title}</div>
            <div className="about-service-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="about-section about-values">
      <h2>💡 Our Core Values</h2>
      <div className="about-values-cards">
        {values.map((v, i) => (
          <div className="about-value-card section-animate" key={v.label} style={{ animationDelay: `${0.2 + i * 0.09}s` }}>
            <span className="about-value-label">{v.label}:</span> {v.desc}
          </div>
        ))}
      </div>
    </div>

    <div className="about-section about-milestones">
      <h2>🏆 Milestones & Achievements</h2>
      <div className="about-milestones-timeline">
        {milestones.map((m, i) => (
          <div className="about-milestone-item section-animate" key={m.year} style={{ animationDelay: `${0.2 + i * 0.13}s` }}>
            <span className="about-milestone-dot" />
            <span className="about-milestone-year">{m.year}</span>
            <span className="about-milestone-text">{m.text}</span>
          </div>
        ))}
        <div className="about-milestone-line" />
      </div>
    </div>
  </section>
);

export default AboutUs;
