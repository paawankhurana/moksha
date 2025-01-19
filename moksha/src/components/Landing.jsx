import React from "react";
import "./Landing.css"; 
import Navbar from "./Navbar.jsx"
import mokshaImage from "../assets/Moksha25.png"; 
import dragonImage from "../assets/dragon.png";
import cloudImage from "../assets/cloud_bl.png";
import cloudImage2 from "../assets/cloud_tr.png";
import dragonTail from "../assets/dragontail.png";
import dragon_scale_1 from "../assets/dragon_scale_1.png";
import dragon_scale_2 from "../assets/dragon_scale_2.png";

const Landing = () => {
  return (
    
         <div className="landing-page">
          <div className="moksha-container">
            <img src={mokshaImage} alt="Moksha 25" className="logo" />
          </div>
          <img src={dragonImage} alt="Dragon" className="dragon" />
          <img src={dragonTail} alt="Dragon Tail" className="dragon-tail" />
          <img src={cloudImage} alt="Clouds" className="cloud" />
          <img src={cloudImage2} alt="Clouds" className="cloud-top-right" />
          <img src={dragon_scale_1} alt="Clouds" className="scale1" />
          <img src={dragon_scale_2} alt="Clouds" className="scale2" />
          <Navbar />
          
        </div>   
    
  );
};

export default Landing;