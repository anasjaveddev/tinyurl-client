import { useState } from "react";

const Hero = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!longURL.trim()) {
      setError("Please enter a URL.");
      return;
    }

    setLoading(true);
    setError("");
    setShortURL("");

    try {
      const response = await fetch(
        'https://backend-production-fc6fe.up.railway.app/save',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ longURL }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        setShortURL(data.shortURL);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-left">
          <h1>URL Shortener, Branded Short Links & Analytics</h1>
          <p className="hero-subtitle">
            Welcome to the original link shortener — simplifying the Internet
            through the power of the URL since 2002.
          </p>
          <p className="hero-description">
            You can use branded domains for fully custom links, track link
            analytics, and enjoy other powerful features with our paid plans.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-white">
              View Plans
            </a>
            <a href="#" className="btn-teal">
              Create Free Account
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="shorten-card">
            <div className="card-tabs">
              <div className="tab active">
                <i className="fa-solid fa-link"></i> Shorten a Link
              </div>
            </div>

            <div className="card-body">
              <div className="input-group">
                <label>
                  <i className="fa-solid fa-paper-plane"></i> Long URL
                  <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Paste long URL here"
                  value={longURL}
                  onChange={(e) => setLongURL(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="input-group">
                  <label>
                    <i className="fa-solid fa-globe"></i> Domain
                  </label>
                  <select>
                    <option>tinyurl.com</option>
                  </select>
                </div>
                <span className="separator">/</span>
                <div className="input-group">
                  <label>
                    <i className="fa-solid fa-pen"></i> Alias (optional)
                  </label>
                  <input type="text" placeholder="Add alias here" />
                  <small>Must be at least 5 characters</small>
                </div>
              </div>

              <button
                className="shorten-btn"
                onClick={handleShorten}
                disabled={loading}
              >
                {loading ? "Shortening..." : "Shorten Link"}
              </button>

              {/* Result */}
              {shortURL && (
                <div className="short-url-result">
                  <div className="short-url-label">
                    <i className="fa-solid fa-circle-check"></i> Your shortened
                    URL
                  </div>
                  <div className="short-url-row">
                    <a
                      href={shortURL}
                      target="_blank"
                      rel="noreferrer"
                      className="short-url-link"
                    >
                      {shortURL}
                    </a>
                    <button
                      className="copy-btn"
                      onClick={() => navigator.clipboard.writeText(shortURL)}
                    >
                      <i className="fa-regular fa-copy"></i> Copy
                    </button>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="error-msg">
                  <i className="fa-solid fa-circle-exclamation"></i> {error}
                </div>
              )}

              <p className="terms">
                By clicking Shorten Link, you agree with our
                <a href="#">Terms of Service</a>,<a href="#">Privacy Policy</a>,
                and <a href="#">Use of Cookies</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
