import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-item">
            <span className="footer-label">Name:</span>
            <span className="footer-value">Nguyen The Toan</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Student ID:</span>
            <span className="footer-value">HE200136</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Class:</span>
            <span className="footer-value">SE2004-NJ</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Email:</span>
            <span className="footer-value">nguyentoan062411@gmail.com</span>
          </div>
        </div>
        <p className="footer-copy">© 2026 Shop Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
