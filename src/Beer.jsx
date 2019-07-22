import React from 'react';
import PropTypes from "prop-types";

function Beer(props){

  let kegLevel = `${props.pints} Pints Remaining`;
  if (props.pints === 0) {
    kegLevel = 'Empty';
  }

  return (
    <div>
      <h2><em>{props.brand}</em>{props.name}</h2>
      <h4>{props.type}</h4>
      <p>$ {props.price} | abv: {props.abv} | ibu: {props.ibu}</p>
      <p><em>{props.description}</em></p>
      <p> {kegLevel} <button onClick={() => {props.onPourBeer(props.index);}}>Pour Beer</button></p>
      <hr/>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  ibu: PropTypes.number,
  description: PropTypes.string,
  pints: PropTypes.number,
  onPourBeer: PropTypes.func,
  beer: PropTypes.object
};

export default Beer;
