import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect (() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton);

  return (
   <React.Fragment>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Better<span className="logo_end_color">grow</span><span className="logo-icon"><i class="fa-solid fa-leaf"></i></span>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/agriculture' className='nav-links' onClick={closeMobileMenu}>
              Agriculture
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/landscape-supplies' className='nav-links' onClick={closeMobileMenu}>
              Landscaping Supplies
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/animal-bedding' className='nav-links' onClick={closeMobileMenu}>
              Animal Bedding
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
            <i class="fa-solid fa-phone"></i> 1300-105-500
            </Link>
          </li>
        </ul> 
        {button && <Button buttonStyle='btn--outline'>
        <i class="fa-solid fa-phone"></i> 1300-105-500</Button>} 
      </div>
    </nav>
   </React.Fragment>
  );
}

export default Navbar
