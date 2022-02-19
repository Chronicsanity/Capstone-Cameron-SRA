import React, {useState, useEffect} from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import Axios from 'axios';

function Navbar() {
const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    UA Little Rock
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                    </li> 
                    <li className='nav-item'>
                    <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                           Register/Login
                       </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                           Dashboard
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar