import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <main>
        <h1>Welcome to Our Store</h1>
        <p>Find the best products for your home improvement needs.</p>
        <div className="cta-buttons">
          <Link to="/products" className="btn btn-primary">
            Shop Now
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
