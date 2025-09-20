export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="row">
          <div className="col-12">
            <h2 className="pricing-title">Pricing Made Simple</h2>
          </div>
        </div>
        <div className="row g-4 g-lg-5 mt-1 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="pricing-visual rounded-4 overflow-hidden price-hero-img">
              <img
                src="images/product-dev.png"
                alt="3D product visual example"
                className="pricing-visual-image"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7 pricing-items-block">
            <div className="pricing-items">
              <div className="pricing-item d-flex">
                <span className="pricing-icon-wrap me-3">
                  <img
                    src="images/pricing1.svg"
                    alt="pricing icon 1"
                    className="pricing-visual-icons"
                  />
                </span>
                <div>
                  <div className="pricing-item-title">
                    <strong>$500/month flat</strong><div className="pricing-item-desc"> — includes hosting, support, and updates</div> 
                  </div>
                </div>
              </div>
              <div className="pricing-item d-flex">
                <span className="pricing-icon-wrap me-3">
                  <img
                    src="images/pricing2.svg"
                    alt="pricing icon 2"
                    className="pricing-visual-icons"
                  />
                </span>
                <div>
                  <div className="pricing-item-title">
                    <strong>Setup Fee: $5,000–$20,000</strong>
                  </div>
                  <div className="pricing-item-desc">
                    (based on the number of customizable aspects and product complexity)
                  </div>
                </div>
              </div>
              <div className="pricing-item d-flex">
                <span className="pricing-icon-wrap me-3">
                  <img
                    src="images/pricing3.svg"
                    alt="pricing icon 3"
                    className="pricing-visual-icons"
                  />
                </span>
                <div>
                  <div className="pricing-item-title">
                    <strong>No hidden fees. No DIY headaches.</strong> <span className="pricing-item-desc">Just custom‑built performance and more conversions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
