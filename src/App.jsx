import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/homepage/Home.jsx";
import Team from "./pages/leadership/Team.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Plants from "./pages/plants/Plants.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/plants" element={<Plants />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
