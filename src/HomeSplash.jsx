import React from 'react';
import TapsPhoto from './assets/taps.jpg';
import logo from './assets/logo.png';
import About from './About';

function HomeSplash() {
  const homeSplashStyles = {
    width: '100vw',
    height: '800px',
    backgroundImage: `url(${TapsPhoto})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const logoStyles = {
    backgroundColor: '#ebddd3',
    // width: '70vw',
    // height: '50vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
  return (
    <div style={homeSplashStyles}>
{/*    <Row vertical='center'>
  <Column flexGrow={1} horizontal='center'>*/}
         <div style={logoStyles}>
           <img src={logo} alt="Generic Breweric Beer Barrel Logo" />
         </div>
{/*       </Column>
</Row>*/}

    <br/>
    <About/>
    </div>
  );
}


export default HomeSplash;
