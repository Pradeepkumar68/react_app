import React from "react";
import "./assets/css/style.css";
import './assets/css/header.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage";
import NavBar from "./components/header/NavbarPage.js";
import HeroSection from "./components/header/HeroSection";

function App() {
  return (
    <div className="" style={{width: '100%'}}>
    <div className="banner-section">
     <div className="overlay"></div>
      <Header />
      <NavBar />
      <HeroSection />
      </div>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
