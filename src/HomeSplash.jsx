import React from 'react';

function HomeSplash() {
  return (
    <div>
      <h1>Tap Room Name</h1>
      <h3>Here is the Tap Room Tag Line</h3>
    <br/>
    <img width='100%' src={require("./assets/taps.jpg")} alt="Image of Beer Taps"/>
    </div>
  );
}


export default HomeSplash;
