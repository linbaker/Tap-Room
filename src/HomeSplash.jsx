import React from 'react';
import TapsPhoto from './assets/taps.jpg';
import About from './About';

function HomeSplash() {
  const homeSplashStyles = {
    width: '100vw',
    height: '800px',
    backgroundImage: `url(${TapsPhoto})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div style={homeSplashStyles}>
      <h1>Generic Brewery</h1>
      <h3>Here is the Tap Room Tag Line</h3>
    <br/>
    <About/>
    </div>
  );
}


export default HomeSplash;
