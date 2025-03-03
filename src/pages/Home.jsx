
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//+
const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <h1>Welcome to Our Store</h1>
        <p>Find the best products for your home improvement needs.</p>
        <div className="cta-buttons">
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
      </main>
      <Footer />
    </div>//+
  );
};

export default Home;