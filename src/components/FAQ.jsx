const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-questions">
          <details>
            <summary>
              What Is a URL Shortener? <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <div className="answer">
              <p>
                A URL shortener is a tool that creates a short, unique URL that
                redirects to the specific long URL of your choice. It makes
                links easier to share in emails, social media, and more.
              </p>
            </div>
          </details>

          <details>
            <summary>
              How Does a URL Shortener Work?
              <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <div className="answer">
              <p>
                When you click a short link, your browser sends a request to our
                servers. We then look up the long URL associated with that short
                link and send you there instantly.
              </p>
            </div>
          </details>

          <details>
            <summary>
              What Are the Benefits of Using a Short URL?
              <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <div className="answer">
              <p>
                Short URLs take up less space, look much cleaner in professional
                communications, and allow you to track how many people are
                clicking your links.
              </p>
            </div>
          </details>

          <details>
            <summary>
              What Is a Custom URL Shortener?
              <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <div className="answer">
              <p>
                A custom shortener allows you to use your own brand name (like
                yourbrand.co) instead of tinyurl.com, giving your links more
                trust and authority.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
