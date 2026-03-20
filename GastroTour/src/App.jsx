import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Routes from './components/Routes';
import TrustVendors from './components/TrustVendors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegionSelector from './components/RegionSelector';
import { regions } from './regionalData';
import './App.css';

function App() {
  const [currentRegion, setCurrentRegion] = useState(regions[0]);

  const handleRegionChange = (region) => {
    setCurrentRegion(region);
    // Smooth scroll to top when changing region
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeStyles = {
    '--primary': currentRegion.palette.primary,
    '--primary-dark': `${currentRegion.palette.primary}CC`,
    '--secondary': currentRegion.palette.secondary,
    '--accent': currentRegion.palette.accent,
    '--background': currentRegion.palette.background,
    '--brand-color': currentRegion.palette.brand
  };

  return (
    <div className="App" style={themeStyles}>
      <Navbar 
        regions={regions} 
        currentRegion={currentRegion} 
        onRegionChange={handleRegionChange} 
      />
      <main>
        <Hero data={currentRegion} />
        <About data={currentRegion} />
        <Routes data={currentRegion} />
        <TrustVendors data={currentRegion} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
