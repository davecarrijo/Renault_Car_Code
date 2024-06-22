// React imports
import React from "react";
// Styles imports
import "./index.css";
import "./App.css";
// Components Imports
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  return (
    <div className='App'>
      <div className='Main_container flex  flex-col  items-center gap-6 mt-24 '>
        <Hero />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
