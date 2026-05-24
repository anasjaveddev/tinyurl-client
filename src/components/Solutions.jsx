const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-header">
        <h2>Your One-Stop Solution for Branding and Managing Links</h2>
        <p>
          We offer a comprehensive suite of premium features to allow users to
          brand and manage links conveniently and confidently.
        </p>
        <a href="#" className="view-plans-btn">
          View Plans
        </a>
      </div>

      <div className="solutions-grid">
        <div className="side-col">
          <div className="solution-item highlighted">
            <h3>Unlimited Tracked Clicks</h3>
            <p>
              We don't believe in making you suffer for your success: track as
              many clicks as you earn with our Pro plans!
            </p>
          </div>
          <div className="solution-item">
            <h3>Detailed Link Analytics</h3>
            <p>
              Get actionable, detailed insights into your social media, emails,
              ads, and any other platforms where click-through matters.
            </p>
          </div>
          <div className="solution-item">
            <h3>Branded Domains</h3>
            <p>
              Links shortened using your own custom domain are more
              professional, more trustworthy, and more clickable.
            </p>
          </div>
        </div>

        <div className="center-col">
          <img src="/laptop-rocket.png" alt="TinyURL Dashboard and Rocket" />
        </div>

        <div className="side-col">
          <div className="solution-item">
            <h3>Fully Custom Links</h3>
            <p>
              Create short links that put your brand front-and-center! Attaching
              your brand domain to TinyURL is quick and intuitive.
            </p>
          </div>
          <div className="solution-item">
            <h3>Bulk Short URLs</h3>
            <p>
              Need tons of unique, rule-based links quickly? Shorten several
              links in a single go using our platform or API.
            </p>
          </div>
          <div className="solution-item">
            <h3>Link Management</h3>
            <p>
              Worried about finding one or two essential links in a tide of
              thousands? We solve that with intuitive management features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
