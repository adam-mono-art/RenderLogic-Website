export default function Support() {
  return (
    <section className="support-section">
      <div className="container p-5 pt-0 pb-0">
        <h2 className="support-title">Support</h2>
        <br/>
        <div className="support-panel mx-auto">
          <div className="row gy-3 align-items-center">
            <div className="col-12 col-lg-9 d-lg-none d-flex justify-content-center">
              <p className="support-text mb-0">
                <strong>Check out our <a className="support-link" href="/faq">FAQ</a> page</strong> and find
                answers to common questions.
              </p>
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-center">
              <a
                href="mailto:support@renderlogic.net"
                className="btn support-btn"
                aria-label="Email Tech Support"
              >
                Email Tech Support
              </a>
            </div>
            <div className="col-12 col-lg-9 d-lg-flex d-none">
              <p className="support-text mb-0">
                <strong>Check out our <a className="support-link" href="/faq">FAQ</a> page</strong> and find
                answers to common questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
