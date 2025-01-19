import React from "react";
import "./Events.css"; 
import stone1 from "../assets_events/stone1.png"; 
import stone2 from "../assets_events/stone2.png"; 
import day1 from "../assets_events/day1.png"; 
import day2 from "../assets_events/day2.png"; 
import day3 from "../assets_events/day3.png"; 
import cloud from "../assets_events/cloud.png"; 

const Events = () => {
  return (
    <section className="Events">
        <img src={stone1} alt="stone1" className="stone1"></img>
        <img src={day3} alt="day3" className="day3"></img>
        <img src={day2} alt="day2" className="day2"></img>
        <img src={day1} alt="day2" className="day1"></img>
        <img src={cloud} alt="cloud" className="cloud"></img>
        <img src={stone2} alt="stone2" className="stone2"></img>
        

    </section>
    
  );
};

export default Events;