import React from 'react';
import TapsPhoto from './assets/taps.jpg';
import Logo from './assets/logo.png';
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
      <img src={require("./assets/logo.png")} alt="Logo"/>
      <h3>Here is the Tap Room Tag Line</h3>
    <br/>
    <About/>
    </div>
  );
}


export default HomeSplash;
