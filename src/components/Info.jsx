const Info = () => {
  return (
    <section className="info-section">
      <div className="info-left">
        <video autoPlay muted loop className="promo-video">
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="info-right">
        <h2>Link Shortening Done Quick and Easy</h2>
        <p>
          Our URL shortener is not only among the first-ever link shorteners on
          the Internet — it's the best out there.
        </p>
        <p>
          Shorten links for social media, blogs, SMS, emails, ads, and almost
          anything both off- and online.
        </p>
        <p>
          Wave goodbye to long, clunky links and give your audiences the
          experiences they deserve!
        </p>

        <div className="info-buttons">
          <a href="#" className="btn-white">
            View Plans
          </a>
          <a href="#" className="btn-dark">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};
export default Info;
