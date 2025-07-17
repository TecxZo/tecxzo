import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdBanner from './components/adBanner';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="my-4 flex justify-center">
        <AdBanner />
      </div>

      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;