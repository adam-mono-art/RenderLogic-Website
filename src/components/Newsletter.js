export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container p-5 pt-0 pb-0">
        <h2 className="newsletter-title">Newsletter</h2>

        {/* Subhead + CTA */}
        <div className="row align-items-center gy-3">
          <div className="col">
            <h3 className="newsletter-headline">
              Render and Revenue – Visuals that Convert
            </h3>
          </div>
          <div className="col-auto">
            <a href="https://renderlogic.activehosted.com/f/1" className="btn newsletter-btn" target="_blank" rel="noopener noreferrer"
            >
              Get Free eBook
            </a>
          </div>
        </div>

        {/* Body copy */}
        <p className="newsletter-body">
          Join the Render Logic newsletter, Render and Revenue, for insights, trends, and
          tips on turning product options into sales. From interactive design strategies to
          tech updates, we’ll send ideas you can put to work right away.
        </p>
      </div>
    </section>
  );
}
