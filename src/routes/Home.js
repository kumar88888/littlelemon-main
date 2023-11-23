import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home;