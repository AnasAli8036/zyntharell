import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import BusinessPage from './BusinessPage';
import SubmitCV from './SubmitCV';

const videoList = [
  'https://media.istockphoto.com/id/2156347104/video/american-style-truck-on-freeway-pulling-load-transportation-theme-4k-3d-illustration.mp4?s=mp4-640x640-is&k=20&c=qE8ldm62pyUA7t4ONmXgVGa4TXi8-CaLggTKNo0BYfs=',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
  'https://filesamples.com/samples/video/mp4/sample_640x360.mp4'
];

function VideoSlider() {
  const [current, setCurrent] = React.useState(0);
  const nextVideo = () => setCurrent((current + 1) % videoList.length);
  const prevVideo = () => setCurrent((current - 1 + videoList.length) % videoList.length);
  return (
    <div className="video-slider">
      <button className="video-arrow left" onClick={prevVideo}>&lt;</button>
      <video
        className="slider-video"
        src={videoList[current]}
        autoPlay
        loop
        muted
        controls={false}
      />
      <button className="video-arrow right" onClick={nextVideo}>&gt;</button>
    </div>
  );
}


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => setDropdownOpen((open) => !open);
  const closeDropdown = () => setDropdownOpen(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Zyntharell</Link>
        <div className="navbar-links">
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/services" className="navbar-link">Our Services</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
          <div
            className="navbar-link navbar-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={closeDropdown}
            onClick={handleDropdown}
            tabIndex={0}
            style={{ position: 'relative' }}
          >
            Careers
            <span style={{ marginLeft: 6, fontSize: '0.8em' }}>▼</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/careers/message" className="dropdown-item" onClick={closeDropdown}>Message From HR</Link>
                <Link to="/careers/submit-cv" className="dropdown-item" onClick={closeDropdown}>Submit Your CV</Link>
                <Link to="/careers/vacancies" className="dropdown-item" onClick={closeDropdown}>Open Vacancies</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col logo-col">
          <img src="/logo192.png" alt="Zyntharell Logo" className="footer-logo" />
          <div className="footer-desc">
            Pioneering DME, Freight Forwarding, E-commerce, and Software Solutions.
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Facebook"><span className="footer-social-icon">&#xf09a;</span></a>
            <a href="#" className="footer-social" aria-label="Instagram"><span className="footer-social-icon">&#xf16d;</span></a>
            <a href="#" className="footer-social" aria-label="LinkedIn"><span className="footer-social-icon">&#xf0e1;</span></a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Our Services</div>
          <ul className="footer-list">
            <li>DME</li>
            <li>Freight Forwarding</li>
            <li>E-commerce</li>
            <li>Software House</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-heading">About</div>
          <ul className="footer-list">
            <li>About Us</li>
            <li>History</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Contact us</div>
          <ul className="footer-list contact-list">
            <li><span className="footer-contact-icon">&#xf041;</span>Suite#406, Noor Trade Centre, Karachi, Pakistan</li>
            <li><span className="footer-contact-icon">&#xf095;</span>   0331-3700354</li>
            <li><span className="footer-contact-icon">&#xf0e0;</span>   info@zyntharell.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Zyntharell. All rights reserved.</span>
        <span className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a> &bull; <a href="#" className="footer-bottom-link">Term &amp; Condition</a>
        </span>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="landing-main">
      <section className="video-section">
        <div className="video-slider-container">
          <VideoSlider />
        </div>
      </section>
      <section className="zyntharell-intro-section" style={{background: '#18120b', color: '#bfa14a', padding: '48px 0 32px 0'}}>
        <div className="zyntharell-intro-container" style={{maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#e6c97a', letterSpacing: '2px', textAlign: 'center'}}>Zyntharell</h1>
          <h2 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px', color: '#bfa14a', textAlign: 'center'}}>Pakistan’s Emerging Multiservice Powerhouse</h2>
          <p style={{fontSize: '1.15rem', lineHeight: '1.7', color: '#fff', marginBottom: '12px'}}>
            Zyntharell is a privately owned, fast-growing business group in Pakistan. We are actively shaping the future across multiple sectors, including Durable Medical Equipment (DME), Freight Forwarding, E-commerce Solutions, and Software Development. With a passion for innovation and service excellence, Zyntharell is built on a foundation of trust, technology, and transformation.
          </p>
          <p style={{fontSize: '1.15rem', lineHeight: '1.7', color: '#fff', marginBottom: '12px'}}>
            From ensuring the timely delivery of essential medical supplies, to powering efficient global trade and building intelligent digital platforms — Zyntharell integrates technology with real-world impact.
          </p>
          <p style={{fontSize: '1.15rem', lineHeight: '1.7', color: '#fff', marginBottom: '12px'}}>
            Our company is home to a team of dedicated professionals, logistics specialists, engineers, and developers — all united by a common goal: to deliver value beyond expectations. As we continue to evolve, Zyntharell is setting its sights on expanding its global presence and becoming a leading force in the industries we serve.
          </p>
          <p style={{fontSize: '1.15rem', lineHeight: '1.7', color: '#fff'}}>
            Zyntharell is more than just a company — it’s a bold vision brought to life through commitment, creativity, and collaboration.
          </p>
        </div>
      </section>
      <section className="services-section landing-services">
        <div className="services-container">
          <h2>Our Services</h2>
          <div className="services-list">
            <Link to="/dme" className="service-btn">DME</Link>
            <Link to="/freight" className="service-btn">Freight Forwarding</Link>
            <Link to="/ecommerce" className="service-btn">E-commerce</Link>
            <Link to="/software" className="service-btn">Software House</Link>
          </div>
        </div>
      </section>
      <section className="news-events-section">
        <div className="news-events-container">
          <h2 className="news-events-title">News and Events</h2>
          <div className="news-events-grid">
            <div className="news-event-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Smart Logistics Platform" className="news-event-img" />
              <div className="news-event-content">
                <div className="news-event-date">Feb 28, 2025</div>
                <div className="news-event-headline">Zyntharell Launches Smart Logistics Platform for Freight Clients</div>
                <div className="news-event-desc">Zyntharell is proud to announce the launch of its advanced logistics management platform, making freight forwarding faster and more transparent.</div>
              </div>
            </div>
            <div className="news-event-card">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd23?auto=format&fit=crop&w=400&q=80" alt="DME Health Camp" className="news-event-img" />
              <div className="news-event-content">
                <div className="news-event-date">Jan 15, 2025</div>
                <div className="news-event-headline">Free Health Checkup Camp Held by Zyntharell DME Unit in Korangi</div>
                <div className="news-event-desc">As part of our healthcare outreach, Zyntharell organized a free medical camp providing basic diagnostics and DME awareness in Karachi.</div>
              </div>
            </div>
            <div className="news-event-card">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Tech Bootcamp" className="news-event-img" />
              <div className="news-event-content">
                <div className="news-event-date">Oct 07, 2024</div>
                <div className="news-event-headline">Zyntharell Hosts One-Day Tech Bootcamp at Software Division – Lahore</div>
                <div className="news-event-desc">A successful one-day workshop on AI and modern development practices was conducted at our Lahore tech campus.</div>
              </div>
            </div>
            <div className="news-event-card">
              <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80" alt="Community Outreach Hyderabad" className="news-event-img" />
              <div className="news-event-content">
                <div className="news-event-date">Sep 26, 2024</div>
                <div className="news-event-headline">Zyntharell Organizes Free Medical & Wellness Camp in Hyderabad</div>
                <div className="news-event-desc">Committed to community care, Zyntharell’s DME team arranged a free checkup and awareness camp for families in Hyderabad.</div>
              </div>
            </div>
          </div>
          <div className="news-events-more-btn-container">
            <button className="news-events-more-btn">More</button>
          </div>
        </div>
      </section>
      <section className="about-section landing-about">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            We are a group of companies dedicated to excellence in DME, Freight Forwarding, E-commerce, and Software Development. Our mission is to deliver innovative solutions and outstanding service across all our business areas.
          </p>
        </div>
      </section>
      <section className="map-section">
        <div className="map-container">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.015019395029!2d67.0260883150016!3d24.81382998407709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6b6e6e6e6e%3A0x6e6e6e6e6e6e6e6e!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px', marginTop: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

function MessageFromHR() {
  return (
    <div className="message-hr-page">
      <h2 className="message-hr-title" style={{ fontFamily: 'Merriweather, serif', fontWeight: 800, letterSpacing: '1px' }}>Message From HR</h2>
      <div className="message-hr-content">
        <p style={{ fontWeight: 700, color: '#e6c97a', fontSize: '1.15rem' }}>Greetings and Thank You for Visiting the Omni’s Career Website</p>
        <p>At Zyntharell, our <span style={{ fontWeight: 700, color: '#e6c97a' }}>vision</span> is to be the first choice for talented professionals — fostering a culture where individuals are empowered to reach their full potential and contribute meaningfully to the industries we serve.</p>
        <p><span style={{ fontWeight: 700, color: '#e6c97a' }}>Our Goal</span> is simple: to hire the right people for the right roles. We focus on effective talent placement, continuous skill development, and creating a work environment that motivates and inspires. We are committed to nurturing a team of passionate, dedicated, and innovative individuals who share our vision for impact and growth.</p>
        <p>Whether you’re applying for an open position or submitting your CV for future opportunities, rest assured that your application is welcomed with the utmost professionalism and confidentiality. We encourage all driven and visionary professionals to become a part of Team Zyntharell and grow with us.</p>
        <p>If you have any questions or need assistance, our <span style={{ fontWeight: 700, color: '#e6c97a' }}>human resources</span> team is always ready to support you. We look forward to connecting with exceptional individuals like you.</p>
        <div className="message-hr-signature">
          <span style={{ fontWeight: 800, color: '#e6c97a', fontSize: '1.13rem', fontFamily: 'Merriweather, serif' }}>Muhammad Yasir Shafiq</span><br />
          <span style={{ fontWeight: 700, color: '#bfa14a', fontFamily: 'Merriweather, serif' }}>HR Manager, Zyntharell</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<BusinessPage title="About Us" description="Coming Soon" />} />
        <Route path="/services" element={<BusinessPage title="Our Services" description="Coming Soon" />} />
        <Route path="/contact" element={<BusinessPage title="Contact Us" description="Coming Soon" />} />
        <Route path="/careers" element={<BusinessPage title="Careers" description="Coming Soon" />} />
        <Route path="/dme" element={<BusinessPage title="DME" description="Coming Soon" />} />
        <Route path="/freight" element={<BusinessPage title="Freight Forwarding" description="Coming Soon" />} />
        <Route path="/ecommerce" element={<BusinessPage title="E-commerce" description="Coming Soon" />} />
        <Route path="/software" element={<BusinessPage title="Software House" description="Coming Soon" />} />
        <Route path="/careers/message" element={<MessageFromHR />} />
        <Route path="/careers/submit-cv" element={<SubmitCV />} />
        <Route path="/careers/vacancies" element={<BusinessPage title="Open Vacancies" description="Coming Soon" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
