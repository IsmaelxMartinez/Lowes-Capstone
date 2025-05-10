import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>

      <a href="{logo}" className="logo">
        The Green <span>Thumb</span>
      </a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/team">Leadership</a>
        <a href="/plants">Plants</a>
      <Link to="/" className="logo">The Green <span>Thumb</span></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/team">Leadership</Link>
        <button className="nav-login-button"><Link to="/login">Login/Sign Up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
