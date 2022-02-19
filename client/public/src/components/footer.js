import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>UA Little Rock is accredited by The Higher Learning Commission. All Rights Reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;