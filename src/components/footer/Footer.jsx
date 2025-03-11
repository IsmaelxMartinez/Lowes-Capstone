import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>The Green Thumb</h3>
          <p>
            123 Garden Street<br />
            Anytown, ST 12345<br />
            info@greenthumb.org
          </p>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <a href="/">Home Page</a>
          <a href="/team">Meet our Leadership</a>
          <a href="#">Beginner's Guide</a>
          <a href="#">Register</a>
        </div>
        <div className="footer-section">
          <h3>Get Involved</h3>
          <a href="#">Donate</a>
          <a href="#">Community Gardens</a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 The Green Thumb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
