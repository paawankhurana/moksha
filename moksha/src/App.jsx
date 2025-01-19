import React from "react";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import Landing from "./components/Landing";
import './App.css';




const App = () => {
  return (
    
    <div className="scroll-container">
      <Landing></Landing>
      <AboutUs></AboutUs>
      <Events></Events>
      <ContactUs></ContactUs>
    </div>

     
    
  );
};


export default App;














