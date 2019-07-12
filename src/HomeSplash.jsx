import React from 'react';
import TapsPhoto from './assets/taps.jpg';
import logo from './assets/logo.png';

function HomeSplash() {
  const homeSplashStyles = {
    width: '100vw',
    height: '800px',
    backgroundImage: `url(${TapsPhoto})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const logoStyles = {
    backgroundColor: '#C3A995',
    width: '70vw',
    height: '50vh'
  }
  return (
    <div style={homeSplashStyles}>
      <div style={logoStyles}>
        <img src={logo} alt="Generic Breweric Beer Barrel Logo" />
      </div>
    <br/>
    </div>
  );
}


export default HomeSplash;
