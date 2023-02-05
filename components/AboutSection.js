
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className='about-container'>
      <img src='/images/img-7.jpg' />
      <h2>Welcome to Bettergrow</h2>
      <p>Bettergrow is a recognised pioneer in the organic recovery sector, with operations spanning across various sites throughout New South Wales. 
        The company was first established in 1978, and over the course of the past 40 years has been at the forefront of an array of organic industries including, drilling slurries, biosolids, garden organics, food and grease trap waste. 
        </p>
        
        <p>Bettergrow’s leadership in these sectors has gone from strength to strength continued re-investment new technologies to maintain a leading position in the organic residuals industry.</p>
        
        <p>As the world moves away from a make, use, dispose model, Bettergrow is determined to play a key role in the recovery, recycling and re-use of products, delivering solutions across a range of industry sectors. Offering customers an array of practical solutions for a variety of organic materials that can be converted to products suitable for beneficial re-use across a range of markets.</p>
       
        <p>We work with governments, communities and multinational companies to progress the circular economy and preserve natural resources for a sustainable future.</p>
      <div className="about-btns">
       

       {/* <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
           GET A QUOTE
  </Button>*/}

       
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

export default AboutSection;
