
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>REUSABILITY AWAITS</h1>
      <p>Great solutions. Better future.</p>
      <div className="hero-btns">

        <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
           GET A QUOTE
        </Button>

       
        {/*<Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
           WARRAGUNDI AGGREGATION <i className='far fa-play-circle'/>
        </Button>
        */}
        
    
      
      </div>
    </div>
  );
}

export default HeroSection;
