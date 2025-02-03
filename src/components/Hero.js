import React, { useState } from "react";
import "./Hero.css";
import { useNavigate } from 'react-router-dom';

const Hero = ({ headline, buttonText }) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/waiver');
  };

  const handleHypeButtonClick = () => {
    // flasing effect
    setIsFlashing(!isFlashing);
  };

  const handleMapButtonClick = () => {
    // location address with maps
    window.open("https://maps.app.goo.gl/C3J1q6E3Jp2xcxh18");
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{headline}</h1>
        <p>Your journey to strength and greatness starts here.</p>
        <button onClick={handleButtonClick}>{buttonText}</button>
        <br></br><br></br>
        <button onClick={handleHypeButtonClick}>
          Hype
        </button>
        <br></br><br></br>
        <button onClick={handleMapButtonClick}>
          Location
        </button>
      </div>

      <div className={`hype ${isFlashing ? 'active' : ''}`} />
    </div>
  );
};

export default Hero;