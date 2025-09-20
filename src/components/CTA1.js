import { Link } from 'react-router-dom';

export default function CTA1() {
  return (
    <section className="cta1-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="cta1-panel mx-auto">
          <div className="text-center">
            <h2 className="cta1-title">
              Need a real-time 3D visualizer?
            </h2>
            <h3 className="cta1-subtitle">
              Book a Demo Today
            </h3>
            <a
              className="btn cta1-btn"
              href="https://calendly.com/heather-renderlogic/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
