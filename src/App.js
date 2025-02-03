import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Waiver from "./components/Waiver";
import Terms from "./components/Terms";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <Hero 
            headline="Welcome to Big Dawgz Gym!" 
            buttonText="Join Now" 
          />
        } />
        
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/waiver" element={<Waiver />} />
        <Route path="/terms" element={<Terms />} />
        <Route path ="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;