import React from 'react';
import './ContactUs.css';
import Koji from "../assets_contact_us/Koji.png"; 
import Line from "../assets_contact_us/Line.png"; 
import logo2 from "../assets_contact_us/logo.png"; 
import x from "../assets_contact_us/x.png";
import fb from "../assets_contact_us/fb.png";  
import gmail from "../assets_contact_us/gmail.png"; 
import insta from "../assets_contact_us/insta.png"; 


const ContactUs = () => {
    return (
<section className="cont-us"> 
        <img src={Koji} alt="Koji" className="Koji"></img>
        <img src={logo2} alt="logo" className="logo2"></img>
    <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="social-links">
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt="Gmail" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="X" className="social-icon" />
            </a>
        </div>
    </div>

    <img src={Line} alt="line" className="line"></img>
    <div className="uni">
    <p>
      Netaji Subhas University of Technology <br />
      Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
    </p>
  </div>

        
      
</section>
    );
  };
  
  export default ContactUs;