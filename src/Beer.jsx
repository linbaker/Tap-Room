import React from 'react';
import PropTypes from "prop-types";

function Beer(props){

  function pourPint(beer){

  }
  return (
    <div>
      <h2><em>{props.brand}</em>{props.name}</h2>
      <h4>{props.type}</h4>
      <p>$ {props.price} | abv: {props.abv} | ibu: {props.ibu}</p>
      <p><em>{props.description}</em> {props.pints}</p>
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
  pints: PropTypes.number
};

export default Beer;
