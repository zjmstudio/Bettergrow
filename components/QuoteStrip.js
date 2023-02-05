
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './QuoteStrip.css';

function QuoteStrip() {
  return (
    <div className='quoteStrip-container'>
    
    <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            For more information or to get a quote, get in touch with us below
            </p>

           
                <div className='footer-btns'>
                   <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'><i class="fa-solid fa-phone"></i> 1300-105-500</Button>
                   <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GET A QUOTE</Button>
                </div>
            


        </section>
    </div>
  );
}

export default QuoteStrip;
