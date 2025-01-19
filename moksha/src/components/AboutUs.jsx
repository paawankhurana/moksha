import React from 'react';
import './AboutUs.css';
import throne from "../assets/throne.png"; 
import about_us2 from "../assets/about_us2.png"; 

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1> 
      </div>
    
    <div className="moksha-dream">
        <h1>Moksha's Dream</h1>
        <p>Moksha is a vibrant festival where creativity steals the spotlight, and liberty is the headline act! It’s the celebration of talent, freedom of speech, and expression that goes beyond the mundane festival experience. Tailored for enthusiasts of artistry and culture, Moksha boasts a diverse array of events such as Theatre Con, Rouge, Battle of Bands, Oorja, Step Up, and many more.</p>
    </div>
    <div className="moksha-dream2">
        <h1>Moksha's Dream</h1>
        <p>Moksha is a vibrant festival where creativity steals the spotlight, and liberty is the headline act! It’s the celebration of talent, freedom of speech, and expression that goes beyond the mundane festival experience. Tailored for enthusiasts of artistry and culture, Moksha boasts a diverse array of events such as Theatre Con, Rouge, Battle of Bands, Oorja, Step Up, and many more.</p>
    </div>
    <img src={throne} alt="throne" className="throne" />
    <img src={about_us2} alt="about_us2" className="about_us2" />
    

    </section>
  );
};

export default AboutUs;