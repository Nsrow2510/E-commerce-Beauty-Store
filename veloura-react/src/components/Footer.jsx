import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Veloura Beauty</h3>
          <p>Your trusted destination for luxury beauty products and tips.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@veloura.com</p>
          <p>Phone: +91 234 567 8901</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Veloura Beauty. All rights reserved.</p>
      </div>
    </footer>
  );
}
