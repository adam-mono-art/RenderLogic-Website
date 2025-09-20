import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => setOpen(false), [location.pathname]);
  
  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current || !triggerRef.current) return;
      if (!menuRef.current.contains(e.target) && !triggerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY == 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY <= 100) {
        setIsVisible(true);
      } else {
        if (window.scrollY != 0) setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  
  const items = [
    { label: 'Home', to: '/home' },
    { label: 'Work', to: '/portfolio' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' },
  ];
  
  const Chevron = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 10l3.5 3.5L15.5 10" fill="none" stroke="#2E63B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const Burger = ({ size = 26 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <line x1="4" y1="7"  x2="20" y2="7"  stroke="#2E63B2" strokeWidth="3" strokeLinecap="round"/>
      <line x1="4" y1="12" x2="20" y2="12" stroke="#2E63B2" strokeWidth="3" strokeLinecap="round"/>
      <line x1="4" y1="17" x2="20" y2="17" stroke="#2E63B2" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );

  return (
    <header className="site-navbar fixed-top">
      <div className="container">
        {/* Desktop */}
        <div 
          className={`nav-shell d-none d-lg-flex`}
          style={{visibility: isVisible?'visible':'hidden'}}
        >
          <Link to="/home" className="d-inline-flex align-items-center text-decoration-none me-3">
            <img src="images/logo.svg" alt="Render Logic" className="navbar-logo" />
          </Link>
          <nav className="desktop-links d-flex align-items-center flex-grow-1 justify-content-center">
            {items.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                className={`nav-link px-4 ${location.pathname === it.to ? 'active' : ''}`}
              >
                <p className='nav-link-text'>{it.label}</p>
              </Link>
            ))}
          </nav>

          <div className="d-flex align-items-center gap-3">
            <Link to="/cta1" className="btn btn-link m-0 p-0 nav-link schedule-link"><p className='nav-link-text'>Schedule a Demo</p></Link>
            <button className="btn btn-link p-0 inside-pill" aria-label="Search">
              <img src="images/search.svg" alt="Render Logic" className="navbar-search" />
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <div className="mobile-shell d-flex d-lg-none align-items-center"
          style={{visibility: isVisible?'visible':'hidden'}}
        >
          <div className="mobile-slot justify-content-start">
            <Link to="/home" className="d-inline-flex align-items-center">
              <img src="images/logo-1.svg" alt="Render Logic" className="mobile-logo" />
            </Link>
          </div>

          <div className="mobile-slot justify-content-center">
            <button className="btn btn-link p-0" aria-label="Search">
              <img src="images/search.svg" alt="Render Logic" className="navbar-search" />
            </button>
          </div>

          <div
            className="mobile-slot justify-content-end position-relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              ref={triggerRef}
              className="btn btn-link p-0"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Burger size={40} />
            </button>

            <div ref={menuRef} className={`mobile-menu shadow ${open ? 'show' : ''}`} role="menu">
              <ul className="list-unstyled mb-0">
                {[...items, { label: 'Schedule a Demo', to: '/cta1' }].map((it) => (
                  <li key={it.label} className="py-2">
                    <Link to={it.to} className="mobile-item d-flex align-items-center justify-content-between">
                      <span className='mobile-menu-item-text'>{it.label}</span>
                      <Chevron />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
