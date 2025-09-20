import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="footer-panel">
          <div className="row gy-4">
            <div className="col-12 col-lg-6 footer-panel-left">
              <div className="mb-3 footer-panel-left-div">
                <Link to="/home" className="d-inline-flex align-items-scratch">
                  <img src="images/logo.svg" alt="Render Logic" className="footer-logo" />
                </Link>
              </div>
              <div>
                <div className="footer-news-title">Join our newsletter</div>
                <p className="footer-news-copy mb-2">
                    Real-time 3D visualizer tips for products that sell themselves.
                </p>
                <form className="footer-inputwrap" onSubmit={(e)=>e.preventDefault()}>
                    <input
                    type="email"
                    className="form-control footer-input"
                    placeholder="Your email"
                    aria-label="Email address"
                    />
                    <button className="btn footer-send" aria-label="Subscribe">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 3L9.5 14.5M21 3l-6.5 18-3.5-7.5L3 10.5 21 3z"
                            fill="none" stroke="#ffffff" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </form>
                <div className="footer-social mt-3 d-flex gap-2">
                    <a href="#" aria-label="LinkedIn" className="footer-social-btn">
                        <img src="images/social-linkedin.svg" alt="Linkedin" className="social-logo" />
                    </a>
                    <a href="#" aria-label="Facebook" className="footer-social-btn">
                    <img src="images/social-facebook.svg" alt="Facebook" className="social-logo" />
                    </a>
                    <a href="#" aria-label="Instagram" className="footer-social-btn">
                    <img src="images/social-insta.svg" alt="Instagram" className="social-logo" />
                    </a>
                    <a href="#" aria-label="YouTube" className="footer-social-btn">
                    <img src="images/social-youtube.svg" alt="Youtube" className="social-logo" />
                    </a>
                    <a href="#" aria-label="Threads" className="footer-social-btn">
                    <img src="images/social-threads.svg" alt="Threads" className="social-logo" />
                    </a>
                </div>
                <br/>
              </div>
            </div>
            <div className='row col-12 col-lg-6'>
                <div className="col-12 col-lg-6">
                    <br/>
                    <div className="footer-heading">Menu</div>
                    <ul className="footer-list">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/portfolio">Work</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cta1">Schedule a Demo</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    <br/>
                    <br/>
                    <div className="footer-heading mt-3">Legal</div>
                    <ul className="footer-list">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <br/>
                    <div className="footer-heading">Support</div>
                    <ul className="footer-list">
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>
                <div className="footer-copy mt-4">
                    <div>Copyright © 2025 Render Logic</div>
                    <div>Rendered by React</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
