// src/components/Process.js

export default function Process() {
  return (
    <section className="process2-section">
      <div className="container p-5 pt-0 pb-0">
        <div className="row">
          <div className="col-12">
            <h2 className="process2-title">How it Works</h2>
          </div>
        </div>
        <div className="row g-3 g-lg-4">
          <div className="col-12 col-lg-8 process-howtowork-img">
            <img
              src="images/howtowork.png"
              alt="Product types visual"
              className="w-100 h-100 object-cover"
            />
          </div>
          <div className="col-12 col-lg-4">
            <img
              src="images/developer.png"
              alt="Configurator on screen"
              className="w-100 h-100 object-cover"
            />
          </div>
        </div>
        <div className="d-none d-lg-block">
          <div className="process2-connector row align-items-center gx-3 mt-5">
            <div className="col-lg-4 d-flex align-items-center">
              <span className="process2-icon-wrap">
                <img
                  src="images/howitwork1.svg"
                  alt="how it works icon 1"
                  className="process2-connector-icons"
                />
              </span>
              <div className="process2-line flex-grow-1" />
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <span className="process2-icon-wrap">
                <img
                  src="images/howitwork2.svg"
                  alt="how it works icon 2"
                  className="process2-connector-icons"
                />
              </span>
              <div className="process2-line flex-grow-1" />
            </div>
            <div className="col-lg-2 d-flex align-items-center">
              <span className="process2-icon-wrap">
                <img
                  src="images/howitwork3.svg"
                  alt="how it works icon 3"
                  className="process2-connector-icons"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="row process2-step-block g-4 g-lg-5 mt-3 mt-lg-4">
          <div className="col-12 col-lg-4 process2-step-unit">
            <div className="process2-step">
              <div className="process2-step-title">
                Tell us about your products and web site.
              </div>
              <p className="mb-0 process2-step-subtitle">
                From simple color changes to hundreds of modular options — we map it all.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 process2-step-unit">
            <div className="process2-step">
              <div className="process2-step-title">
                We build your product visualizer.
              </div>
              <p className="mb-0 process2-step-subtitle">
                Tailored 3D configurators using clean, fast, scalable Three.js and React Three Fiber code.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 process2-step-unit">
            <div className="process2-step">
              <div className="process2-step-title">
                Launch your Render Logic site or integrate your custom code into your existing site.
              </div>
              <p className="mb-0 process2-step-subtitle">
                Hosted and supported by us — no maintenance or dev work needed on your end.
              </p>
            </div>
          </div>
        </div>

        <div className="d-lg-none mt-5">
          <div className="process2-step-mobile d-flex">
            <span className="process2-icon-wrap me-3">
              <img
                src="images/howitwork1.svg"
                alt="how it works icon 1"
                className="process2-connector-icons"
              />
            </span>
            <div>
              <div className="process2-step-title">Tell us about your products and web site.</div>
              <p className="mb-3 process2-step-subtitle">From simple color changes to hundreds of modular options — we map it all.</p>
            </div>
          </div>
          <div className="process2-step-mobile d-flex">
            <span className="process2-icon-wrap me-3">
              <img
                src="images/howitwork2.svg"
                alt="how it works icon 2"
                className="process2-connector-icons"
              />
            </span>
            <div>
              <div className="process2-step-title">We build your product visualizer.</div>
              <p className="mb-3 process2-step-subtitle">Tailored 3D configurators using clean, fast, scalable Three.js and React Three Fiber code.</p>
            </div>
          </div>
          <div className="process2-step-mobile d-flex">
            <span className="process2-icon-wrap me-3">
              <img
                src="images/howitwork3.svg"
                alt="how it works icon 3"
                className="process2-connector-icons"
              />
            </span>
            <div>
              <div className="process2-step-title">Launch your Render Logic site or integrate your custom code into your existing site.</div>
              <p className="mb-0 process2-step-subtitle">Hosted and supported by us — no maintenance or dev work needed on your end.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
