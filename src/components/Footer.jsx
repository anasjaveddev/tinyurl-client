const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Link Editor</a>
            </li>
            <li>
              <a href="#">Link Management</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Short URL Tracking</a>
            </li>
            <li>
              <a href="#">QR Code Generator</a>
            </li>
            <li>
              <a href="#">Short URL API</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">For Developers</a>
            </li>
            <li>
              <a href="#">Our Proven Process</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="#">Help Desk</a>
            </li>
            <li>
              <a href="#">Contact Sales</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
            <li>
              <a href="#">Report Abuse</a>
            </li>
          </ul>
        </div>

        <div className="footer-col legal-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Accessibility Statement</a>
            </li>
            <li>
              <a href="#">Privacy Manager</a>
            </li>
          </ul>

          <div className="footer-brand">
            <img src="/logo.png" alt="TinyURL Logo" className="footer-logo" />
            <p className="copyright">
              &copy; 2026 TinyURL LLC
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
