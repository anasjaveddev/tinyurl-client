const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-left">
        <h2>Transforming the Digital Landscape Since ‘02</h2>
        <p className="stats-desc">
          TinyURL has created billions of short links for marketers,
          influencers, small business owners, and large businesses.
        </p>

        <div className="stats-grid">
          <div className="stat-row">
            <span className="stat-number">Billions</span>
            <span className="stat-text">of redirects per month</span>
          </div>
          <div className="stat-row">
            <span className="stat-number">24 years</span>
            <span className="stat-text">of shortening URLs</span>
          </div>
          <div className="stat-row">
            <span className="stat-number">31,310,989,904</span>
            <span className="stat-text">TinyURLs created</span>
          </div>
        </div>
      </div>

      <div className="stats-right">
        <video autoPlay muted loop className="promo-video">
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
export default Stats;
