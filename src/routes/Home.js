import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';

function Home() {
  return (
    <main>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Footer />
    </main>
  )
}

export default Home
