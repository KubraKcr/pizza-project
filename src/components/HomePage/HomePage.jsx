import React from "react";
import { Link } from "react-router-dom";
import "./homeP.css";
import CategoryBar from "../CategoryBar/CategoryBar";
import BodyComponent from "../Body/BodyComponent";
import { mainCategories, menuCategories } from '../CategoryBar/CategoryData';
import Footer from "../Footer/Footer";
import Success from "../Success/Success";
function HomePage() {
  return (
    <div className="hero-wrapper">
     
      <img
        src="/images/iteration-1-images/home-banner.png"
        alt="Home Banner"
        className="home-img"
      />
      <div className="home-logo">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
      </div>
      <div className="home-hero-text">
        <h4 className="firsat">fırsatı kaçırma</h4>
        <h2>KOD ACIKTIRIR</h2>
        <h3>PİZZA, DOYURUR</h3>
        <Link to="/siparis">
          <button className="hero-btn">ACIKTIM</button>
        </Link>
      </div>
    <CategoryBar categories={mainCategories} />
      
      <BodyComponent />
      <Footer/>
    </div>
  );
}

export default HomePage;
