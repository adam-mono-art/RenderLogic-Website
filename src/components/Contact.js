export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container p-5 pt-0 pb-0">
        <h2 className="contact-title">Contact</h2>
        <br/>
        <div className="contact-panel mx-auto">
          <div className="row gy-3 align-items-start">
            <div className="col-12 col-lg-8">
              <p className="contact-lead">
                Whether you’re ready to launch or just exploring ideas,
                we’d love to hear from you.
              </p>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center">
              <a href="mailto:support@renderlogic.net" className="btn contact-btn mt-3">
                Email Sales
              </a>
            </div>
          </div>
          <br/>
          <div className="contact-lines mt-3 d-flex flex-column gap-4">
            <div className="contact-line ">
              <span className="contact-label">Phone:</span> 
              <br/>
              <span className="contact-value"> (805) 232-4112</span>
            </div>
            <div className="contact-line ">
              <span className="contact-label">Headquarters:</span>
              <br/>
              <span className="contact-value"> Wichita, KS</span>
            </div>
            <div className="contact-line ">
                <div className="contact-label"> Marketing / Operations: </div> 
                <div className="d-flex flex-column"> 
                  <span className="contact-value ">Oxnard, CA</span> 
                  <span className="contact-value ">Budapest, Hungary</span> 
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
