import React from 'react';
import { beers } from './assets/BeerData';
import Beer from './Beer';
import NewKeg from './NewKeg'

class BeerList extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    allBeerOnTap: beers,
  };
  this.handleNewBeerSubmit = this.handleNewBeerSubmit.bind(this);
  this.handlePourBeer = this.handlePourBeer.bind(this);
}

handleNewBeerSubmit(newBeer) {
  let newAllBeerOnTap = this.state.allKegs;
  newAllBeerOnTap.push(newBeer);
  this.setState({ allBeer: newAllBeerOnTap });
}

handlePourBeer(index) {
  let newAllBeerOnTap = this.state.allBeerOnTap;
  if (newAllBeerOnTap[index].pints > 0){
    newAllBeerOnTap[index].pints--;
  } else {
    return;
  }
  this.setState({ allBeerOnTap: newAllBeerOnTap });
}
  render() {
    return (
      <div>
        <h1>Now on Tap:</h1>
        <hr/>
        {this.state.allBeerOnTap.map((beer, index) =>
          <Beer name={beer.name}
            brand={beer.brand}
            type={beer.type}
            price={beer.price}
            ibu={beer.ibu}
            abv={beer.abv}
            description={beer.description}
            key={index}
            onPourBeer={this.handlePourBeer}
            pints={beer.pints}
            index={index}
            />
          )}
          <NewKeg onNewBeerSubmit={this.handleNewBeerSubmit}/>
        </div>
      );
   }
}

export default BeerList;


