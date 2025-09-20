export default function Features() {
  return (
    <section className="features-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="row d-flex justify-content-center align-item-center">
          <div className="col-12 col-lg-7">
            <h2 className="features-title">
              <span className="d-block fw-bold mb-5">Why Render Logic?</span>
            </h2>
            <h3 className="features-subtitle">
              <span className="d-block fw-bold">Interactive. Immersive.</span>
              <span className="d-block fw-bold">Instantly Sell‑able.</span>
            </h3>
            <p className="features-intro">
              Render Logic creates lightning‑fast, Three.js and React Three Fiber‑powered 3D
              product visualizers that live right on your website. Give your customers full control
              to personalize every detail — colors, materials, components, features — and watch your
              conversion rates climb.
            </p>
          </div>
          <div className="row col-12 col-lg-5">
            <div className="col-12 mt-0 mt-lg-5 pt-5"/>
            <div className="col-12 features-hero-img">
              <img
                src="images/feature.png"
                alt="3D product visualization example"
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="row g-3 g-md-4 mt-5 align-items-stretch">
          <div className="col-12 col-md-6 d-flex">
            <div className="feature-card rounded-5 w-100">
              <div className="feature-card-title">Custom</div>
              <p className="mb-0 feature-card-title-text">
                Built on custom Three.js and React Three Fiber architecture, not generic templates.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="feature-card rounded-5 w-100">
              <div className="feature-card-title">E Commerce-Ready</div>
              <p className="mb-0 feature-card-title-text">
                Designed for e-commerce-ready integration using JavaScript, HTML and CSS.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="feature-card rounded-5 w-100">
              <div className="feature-card-title">Real-Time</div>
              <p className="mb-0 feature-card-title-text">Real-time updates as users customize.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="feature-card rounded-5 w-100">
              <div className="feature-card-title">No Limits</div>
              <p className="mb-0 feature-card-title-text">Works with complex, multi-option products.</p>
            </div>
          </div>
        </div>
        <div className="features-bottom-text">
          <p>We don’t just show your product. We let users style it, rotate it, build it — and fall in love with it.</p>
        </div> 
      </div>
    </section>
  );
}
