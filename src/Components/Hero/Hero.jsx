// HeroSection.js
import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Plan Your Perfect Getaway</h1>
        <p>Discover amazing hotels and top destinations around the world</p>
        <form className="search-form">
          <input type="text" placeholder="Enter a destination" />
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <select>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
