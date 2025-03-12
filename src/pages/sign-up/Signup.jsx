import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="main-container">

      <div className="login-container">
        <h1>Get Started Now</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Example@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Example@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="At least 8 characters"
              required
            />
          </div>
          <div className="form-group">
            <div className="small-cont">
              <input type="checkbox" id="agreement" name="agreement" />
              <label htmlFor="agreement">I agree to the terms & conditions</label>
            </div>
          </div>
          <button type="submit">Sign In</button>
          <p className="login-link">
            Returning User? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="signup-photo">
        <img src="/signup.jpg" alt="Gardening" />
      </div>
    </div>
  );
};

export default Signup;
