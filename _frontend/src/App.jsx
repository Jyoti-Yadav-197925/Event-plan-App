import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
