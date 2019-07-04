import React from 'react';
import { beers } from './assets/BeerData';
import Beer from './Beer';

function BeerList() {
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
              description={beer.description}/>
          )}
        </div>
      );
}


export default BeerList;
