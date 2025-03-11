import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav>
      <a href="{logo}" className="logo">The Green <span>Thumb</span></a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/team">Leadership</a>
      </div>
    </nav>
  );
};

export default Navbar;