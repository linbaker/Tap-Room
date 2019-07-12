import React from 'react';
import { beers } from './assets/BeerData';
import Beer from './Beer';

function BeerListByIBU() {

  function compare(a, b) {
    const ibuA = a.ibu;
    const ibuB = b.ibu;

    let comparison = 0;
    if (ibuA > ibuB) {
      comparison = 1;
    } else if (ibuA < ibuB) {
      comparison = -1;
    }
    return comparison;
  }
  // var beers[] =

    return (
      <div>
        <h1>Now on Tap:</h1>
        <hr/>
      
          )}
        </div>
      );
}


export default BeerListByIBU;
