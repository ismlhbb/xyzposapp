import React, {useState} from 'react';
import NavbarLeft from '../components/NavbarLeft';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BerlanggananSection from '../components/BerlanggananSection';
import Footer from '../components/Footer';


const Home = () => {
  // Toggle hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <NavbarLeft isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection />
      <BerlanggananSection />
      <Footer />
    </>
  )
}

export default Home;