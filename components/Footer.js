import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
      <div className='footer-container'>
        {/*<section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            For more information or to get a quote, get in touch with us below
            </p>

           
                <div className='footer-btns'>
                   <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'><i class="fa-solid fa-phone"></i> 1300-105-500</Button>
                   <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GET A QUOTE</Button>
                </div>
            


        </section> */}
        
        <div className='footer-links'>
            <div className="footer-link-wrapper">
                <div className='footer-link-items'>
                    <h2>Quicklinks</h2>
                    <Link to='/'>Landscape Supplies</Link>
                    <Link to='/'>Animal Bedding</Link>
                    <Link to='/'>Environmental</Link>
                    <Link to='/'>Oberon Development</Link>
                    <Link to='/'>Contact</Link>
                </div>

                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <Link to='/'><i class="fa-solid fa-phone"></i> 1300-105-500</Link>
                    <Link to='/'><i class="fa-solid fa-envelope"></i> info@bettergrow.com.au</Link>
                    <Link to='/'><i class="fa-sharp fa-solid fa-location-dot"></i> Head Office, 2 Wella Way, Somersby NSW 2250</Link>
                    
                </div>
            </div>
            </div>
{/*}
            <div className="footer-link-wrapper">
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Videos</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>

                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
    */}

        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    Better<span className="logo_end_color">grow</span><span className="logo-icon"><i class="fa-solid fa-leaf"></i></span>
                    </Link>
                </div>
                <small className="website-rights">Bettergrow ©2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='facebook'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </Link>


                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                    </Link>


                    <Link className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube'></i>
                    </Link>


                    <Link className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                        <i className='fab fa-twitter'></i>
                    </Link>


                    <Link className='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin'></i>
                    </Link>


                </div>
            </div>
        </section>
      
      </div>
    
   );
}

export default Footer
