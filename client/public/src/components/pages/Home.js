import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
    return (
       <> 
        <Navbar />
        <HeroSection />
        <Footer />
    </>
    );
}

export default Home;