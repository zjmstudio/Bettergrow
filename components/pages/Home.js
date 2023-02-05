import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import Cards from '../Cards';
import QuoteStrip from '../QuoteStrip';
import Footer from '../Footer';

function Home () {
    return (
        <React.Fragment>
            <HeroSection />
            <AboutSection />
            <Cards />
            <QuoteStrip />
            <Footer />
        </React.Fragment>

    );
}

export default Home;