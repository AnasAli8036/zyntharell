import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import BusinessPage from './BusinessPage';
import SubmitCV from './SubmitCV';
import AboutUs from "./AboutUs";

const videoList = [
  'https://media.istockphoto.com/id/2156347104/video/american-style-truck-on-freeway-pulling-load-transportation-theme-4k-3d-illustration.mp4?s=mp4-640x640-is&k=20&c=qE8ldm62pyUA7t4ONmXgVGa4TXi8-CaLggTKNo0BYfs=',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
  'https://filesamples.com/samples/video/mp4/sample_640x360.mp4'
];

function VideoSlider() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videoList.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);
  return (
    <div className="video-slider fullscreen-video-slider" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 1 }}>
      <video
        className="slider-video fullscreen-video section-animate"
        src={videoList[current]}
        autoPlay
        loop={false}
        muted
        controls={false}
        playsInline
        style={{ width: '100vw', height: '100vh', objectFit: 'cover', borderRadius: 0, transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1)', display: 'block', background: '#000' }}
        key={current}
      />
      {/* fallback overlay for unsupported browsers */}
      <div style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}}></div>
    </div>
  );
}


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleDropdown = () => setDropdownOpen((open) => !open);
  const closeDropdown = () => setDropdownOpen(false);
  const handleServicesDropdown = () => setServicesDropdownOpen((open) => !open);
  const closeServicesDropdown = () => setServicesDropdownOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ fontFamily: 'Merriweather, serif', fontWeight: 800, fontSize: '2rem', letterSpacing: '2px', color: '#bfa14a', textTransform: 'uppercase', textDecoration: 'none' }}>Zyntharell</Link>
        <button className="navbar-menu-btn" onClick={toggleMobileMenu} aria-label="Open menu" style={{ display: 'none', background: 'none', border: 'none', fontSize: 28, color: '#bfa14a', cursor: 'pointer', marginLeft: 'auto' }}>
          <span style={{fontWeight: 900}}>&#9776;</span>
        </button>
        <div className={`navbar-links${mobileMenuOpen ? ' navbar-links-mobile-open' : ''}`}
          style={{
            ...(mobileMenuOpen ? {
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#18120b',
              zIndex: 1000,
              paddingTop: 80,
              alignItems: 'center',
              gap: 32,
              fontSize: 22
            } : {})
          }}
        >
          <Link to="/about" className="navbar-link" style={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }} onClick={closeMobileMenu}>About Us</Link>
          <div
            className="navbar-link navbar-dropdown"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={closeServicesDropdown}
            onClick={handleServicesDropdown}
            tabIndex={0}
            style={{ position: 'relative', fontFamily: 'Merriweather, serif', fontWeight: 700 }}
          >
            Our Services
            <span style={{ marginLeft: 6, fontSize: '0.8em' }}>▼</span>
            {servicesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/dme" className="dropdown-item" onClick={() => { closeServicesDropdown(); closeMobileMenu(); }}>DME</Link>
                <Link to="/freight" className="dropdown-item" onClick={() => { closeServicesDropdown(); closeMobileMenu(); }}>Freight Forwarding</Link>
                <Link to="/ecommerce" className="dropdown-item" onClick={() => { closeServicesDropdown(); closeMobileMenu(); }}>E-commerce</Link>
                <Link to="/software" className="dropdown-item" onClick={() => { closeServicesDropdown(); closeMobileMenu(); }}>Software House</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="navbar-link" style={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }} onClick={closeMobileMenu}>Contact Us</Link>
          <div
            className="navbar-link navbar-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={closeDropdown}
            onClick={handleDropdown}
            tabIndex={0}
            style={{ position: 'relative', fontFamily: 'Merriweather, serif', fontWeight: 700 }}
          >
            Careers
            <span style={{ marginLeft: 6, fontSize: '0.8em' }}>▼</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/careers/message" className="dropdown-item" onClick={() => { closeDropdown(); closeMobileMenu(); }}>Message From HR</Link>
                <Link to="/careers/submit-cv" className="dropdown-item" onClick={() => { closeDropdown(); closeMobileMenu(); }}>Submit Your CV</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .navbar-menu-btn { display: block !important; }
          .navbar-links {
            display: none !important;
          }
          .navbar-links.navbar-links-mobile-open {
            display: flex !important;
          }
        }
        @media (max-width: 900px) {
          .navbar-container { flex-direction: row; align-items: center; }
        }
      `}</style>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer" style={{ background: '#18120b', color: '#bfa14a', padding: '24px 0 8px 0', fontFamily: 'Merriweather, serif', fontSize: 15 }}>
      <div className="footer-main" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: 900, margin: '0 auto', padding: '0 16px', gap: 16 }}>
        <div className="footer-col logo-col" style={{ flex: '1 1 180px', minWidth: 120, marginBottom: 12 }}>
          <img src="/logo192.png" alt="Zyntharell Logo" className="footer-logo" style={{ width: 48, height: 48, marginBottom: 8 }} />
          <div className="footer-desc" style={{ fontSize: 13, color: '#fff', marginBottom: 8 }}>
            DME, Freight, E-commerce, Software
          </div>
          <div className="footer-socials" style={{ display: 'flex', gap: 8 }}>
            <a href="#" className="footer-social" aria-label="Facebook" style={{ color: '#bfa14a', fontSize: 18 }}><span className="footer-social-icon">&#xf09a;</span></a>
            <a href="#" className="footer-social" aria-label="Instagram" style={{ color: '#bfa14a', fontSize: 18 }}><span className="footer-social-icon">&#xf16d;</span></a>
            <a href="#" className="footer-social" aria-label="LinkedIn" style={{ color: '#bfa14a', fontSize: 18 }}><span className="footer-social-icon">&#xf0e1;</span></a>
          </div>
        </div>
        <div className="footer-col" style={{ flex: '1 1 120px', minWidth: 100, marginBottom: 12 }}>
          <div className="footer-heading" style={{ fontWeight: 700, marginBottom: 6 }}>Services</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Link to="/dme" className="footer-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>DME</Link>
            <Link to="/freight" className="footer-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Freight</Link>
            <Link to="/ecommerce" className="footer-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>E-commerce</Link>
            <Link to="/software" className="footer-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700, fontSize: 14 }}>Software</Link>
          </div>
        </div>
        <div className="footer-col" style={{ flex: '1 1 120px', minWidth: 100, marginBottom: 12 }}>
          <div className="footer-heading" style={{ fontWeight: 700, marginBottom: 6 }}>About</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Link to="/about" className="footer-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>About Us</Link>
            <Link to="/contact" className="footer-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700, fontSize: 14 }}>Contact</Link>
          </div>
        </div>
        <div className="footer-col" style={{ flex: '1 1 160px', minWidth: 120, marginBottom: 12 }}>
          <div className="footer-heading" style={{ fontWeight: 700, marginBottom: 6 }}>Contact</div>
          <div style={{ fontSize: 13, color: '#fff', marginBottom: 4 }}><span className="footer-contact-icon">&#xf041;</span> Suite#406, Noor Trade Centre, Karachi</div>
          <a href="tel:03313700354" style={{ color: '#bfa14a', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'block', marginBottom: 2 }}><span className="footer-contact-icon">&#xf095;</span> 0331-3700354</a>
          <a href="mailto:info@zyntharell.com" style={{ color: '#bfa14a', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'block' }}><span className="footer-contact-icon">&#xf0e0;</span> info@zyntharell.com</a>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: 'center', fontSize: 13, color: '#bfa14a', marginTop: 8 }}>
        <span>&copy; {new Date().getFullYear()} Zyntharell. All rights reserved.</span>
        <span style={{ marginLeft: 8 }}>
          <Link to="#" className="footer-bottom-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontSize: 13, marginRight: 4 }}>Privacy Policy</Link>
          &bull;
          <Link to="#" className="footer-bottom-link" style={{ color: '#bfa14a', textDecoration: 'underline', fontSize: 13, marginLeft: 4 }}>Terms</Link>
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
      <section className="zyntharell-intro-section" style={{background: '#0a0a0a', color: '#bfa14a', padding: '48px 0 32px 0'}}>
        <div className="zyntharell-intro-container" style={{maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
          <h1 className="home-main-heading" style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px', color: '#e6c97a', letterSpacing: '2px', textAlign: 'center', fontFamily: 'Merriweather, serif', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Zyntharell  
          </h1>
          <h2 className="home-section-heading" style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: '#bfa14a', textAlign: 'center', fontFamily: 'Merriweather, serif'}}>
            Pakistan’s Emerging Multiservice Powerhouse
          </h2>
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
      <section className="home-services-buttons" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', gap: '2rem', justifyContent: 'center', margin: '2.5rem 0' }}>
        <div className="home-section-heading" style={{ fontSize: '2rem', fontWeight: 700, color: '#bfa14a', marginBottom: '1rem', textAlign: 'center', fontFamily: 'Merriweather, serif' }}>Our Services</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <Link to="/dme" className="service-btn" style={{ minWidth: 220, minHeight: 80, fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 24, background: '#bfa14a', color: '#18120b', boxShadow: '0 4px 24px #bfa14a22', textDecoration: 'none', margin: '0 1rem' }}>DME</Link>
          <Link to="/freight" className="service-btn" style={{ minWidth: 220, minHeight: 80, fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 24, background: '#bfa14a', color: '#18120b', boxShadow: '0 4px 24px #bfa14a22', textDecoration: 'none', margin: '0 1rem' }}>Freight Forwarding</Link>
          <Link to="/ecommerce" className="service-btn" style={{ minWidth: 220, minHeight: 80, fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 24, background: '#bfa14a', color: '#18120b', boxShadow: '0 4px 24px #bfa14a22', textDecoration: 'none', margin: '0 1rem' }}>E-commerce</Link>
          <Link to="/software" className="service-btn" style={{ minWidth: 220, minHeight: 80, fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 24, background: '#bfa14a', color: '#18120b', boxShadow: '0 4px 24px #bfa14a22', textDecoration: 'none', margin: '0 1rem' }}>Software House</Link>
        </div>
      </section>
      <section className="news-events-section">
        <div className="news-events-container">
          <h2 className="home-section-heading" style={{ fontSize: '2rem', fontWeight: 700, color: '#bfa14a', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Merriweather, serif' }}>News and Events</h2>
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
        </div>
      </section>
      {/* --- HOME PAGE SERVICES & ABOUT SECTION --- */}
      <HomeServicesAbout />
      <section className="map-section">
        <div className="map-container">
          <h2 className="home-section-heading" style={{ fontSize: '2rem', fontWeight: 700, color: '#bfa14a', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Merriweather, serif' }}>Our Location</h2>
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

const servicesHome = [
  {
    icon: "🏥",
    title: "DME",
    desc: "High-quality medical equipment and home care solutions."
  },
  {
    icon: "🚚",
    title: "Freight Forwarding",
    desc: "Safe, efficient, and cost-effective global logistics."
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Custom platforms that drive digital trade and growth."
  },
  {
    icon: "💻",
    title: "Software House",
    desc: "Smart, scalable, and secure software for your business."
  }
];

function HomeServicesAbout() {
  return (
    <section className="home-services-about" style={{ background: '#0a0a0a' }}>
      <div className="home-services-section">
        <h2 className="home-section-heading" style={{ fontSize: '2rem', fontWeight: 700, color: '#bfa14a', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Merriweather, serif' }}>Our Services</h2>
        <div className="home-services-grid">
          {servicesHome.map((s, i) => (
            <div className="home-service-card section-animate" key={s.title} style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
              <div className="home-service-icon">{s.icon}</div>
              <div className="home-service-title">{s.title}</div>
              <div className="home-service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-about-section">
        <h2 className="home-section-heading" style={{ fontSize: '2rem', fontWeight: 700, color: '#bfa14a', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Merriweather, serif' }}>About Us</h2>
        <p className="home-about-text">
          We are a group of companies dedicated to excellence in DME, Freight Forwarding, E-commerce, and Software Development. Our mission is to deliver innovative solutions and outstanding service across all our business areas.
        </p>
        <Link to="/about" className="home-about-link home-about-cta" style={{display: 'none'}}>Learn more about Zyntharell →</Link>
      </div>
    </section>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
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
