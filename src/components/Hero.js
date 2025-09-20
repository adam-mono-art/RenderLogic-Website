export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="row">
          <div className="col-12 col-lg-11">
            <h3 className="hero-title">
              You Built It. Let Buyers Really See It.
              <br/>
              Render Logic turns your product into a real-time visual experience.
            </h3>
            <p className="hero-subtitle">
              From cars and boats to jewelry and tiny homes, if it can be
              customized, we can bring it to life in the browser.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <img src="images/hero-logo.png" alt="Render Logic" className="hero-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
