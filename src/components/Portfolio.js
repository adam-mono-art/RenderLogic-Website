export default function Portfolio() {
  return (
    <section className="work-section">
      <div className="container p-5 pt-0 pb-0">
        <h2 className="work-title">Our Work</h2>
        <p className="work-lead">Immersive product experiences. Real results.</p>
        <p className="work-body">
          At Render Logic, we don’t just show products, we let customers style them, rotate
          them, and fall in love with them. Below are a few examples of the custom-built
          configurators we’ve created.
        </p>
        <p className="work-body">
          Each one is designed from scratch using Three.js or React Three Fiber — fast,
          flexible, and fully tailored to the product’s complexity.
        </p>
        <br/>
        <div className="work-cards mt-4">
          <div className="work-card">
            <div className="work-card-meta">
              <div className="work-card-title">Table Configurator</div>
              <div className="work-card-desc">
                Let users build their ideal table from the ground up — choose materials,
                colors, and dimensions in real time.
              </div>
            </div>
          </div>
          <div className="work-card">
            <div className="work-card-meta">
              <div className="work-card-title">Wheel Configurator</div>
              <div className="work-card-desc">
                From metal finishes to top coat, this visualizer lets buyers design their
                wheels — all on mobile.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
