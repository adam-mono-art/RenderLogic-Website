import { Link } from 'react-router-dom';

export default function CTA2() {
  return (
    <section className="cta2-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="cta2-panel mx-auto">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-lg-11">
              <h2 className="cta2-title">
                Ready to See It in Action?
              </h2>
              <p className="cta2-copy">
                Let us show you what we can do. In 20 minutes, you’ll see how interactive
                visuals can <span className="cta2-strong">transform how buyers experience your products</span>
                — and your bottom line.
              </p>
              <p className="cta2-copy cta2-copy-strong">
                <span className="cta2-strong">Schedule Your Demo Now</span>
                <br />
                and bring your product to life.
              </p>
            </div>
            <div className="col-12 col-lg-1 d-flex justify-content-lg-end">
              <Link to="/cta" className="btn cta2-btn">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
