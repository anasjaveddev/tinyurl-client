const Plans = () => {
  return (
    <section className="plans-section">
      <div className="plans-container">
        <h2 className="plans-title">TinyURL Plans Include:</h2>

        <div className="features-grid">
          <div className="feature-item">
            <h3>Detailed Link Analytics</h3>
            <p>
              Stay on top of your links' performance and get insights into the
              clicks you earn and people you reach.
            </p>
            <img src="/analytics.png" alt="Analytics Graphic" />
          </div>

          <div className="feature-item">
            <h3>Fully Branded Domains</h3>
            <p>
              Customize every part of your links with branded domains — say
              goodbye to default link shortening!
            </p>
            <img src="/branded.png" alt="Branded Domains Graphic" />
          </div>

          <div className="feature-item">
            <h3>Bulk Short URLs</h3>
            <p>
              Scale your communications with our API, and create thousands of
              unique short links in the blink of an eye.
            </p>
            <img src="/bulk.png" alt="Bulk URLs Graphic" />
          </div>

          <div className="feature-item">
            <h3>Link Management</h3>
            <p>
              Take full control of your links: search, edit, and manage
              thousands at a time from a convenient dashboard.
            </p>
            <img src="/management.png" alt="Management Graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Plans;
