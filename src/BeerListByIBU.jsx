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
        {beers.map((beer) =>
          <Beer name={beer.name}
            brand={beer.brand}
            type={beer.type}
            price={beer.price}
            ibu={beer.ibu}
            abv={beer.abv}
            description={beer.description}
            pints={beer.pints}
            />

    //         const myData = [].concat(this.state.data)
    // .sort((a, b) => a.itemM > b.itemM)
    // .map((item, i) =>
    //     <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
    // );
          )}
        </div>
      );
}


export default BeerListByIBU;
