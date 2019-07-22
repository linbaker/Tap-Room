import React from 'react';
import { PropTypes } from 'prop-types';
import { v4 } from 'uuid';

function NewKeg(props) {
  console.log(props);
    let Name = null;
    let Brand = null;
    let Type = null;
    let Price = null;
    let IBU = null;
    let ABV = null;
    let Description = null;
    let Pints = null;

  function addBeer(event){
    event.preventDefault();
    props.onNewBeerSubmit({name: Name.value, brand: Brand.value, type: Type.value, price: parseInt(Price.value), ibu: parseInt(IBU.value), abv: parseInt(ABV.value), description: Description.value, pints: parseInt(Pints.value), id: v4() });

    Name.value = '';
    Brand.value=  '';
    Type.value=  '';
    Price.value=  '';
    IBU.value=  '';
    ABV.value = '';
    Description.value = '';
    Pints.value = '124';
  }

  return (
    <div>
      <h1>Add a beer to the list:</h1>
      <form onSubmit={addBeer}>
        <input
          type='text'
          id='name'
          ref={(input) => {Name = input;}}
          placeholder='Name'/>
        <br/>
        <input
          type='text'
          id='brand'
          ref={(input) => {Brand = input;}}
          placeholder='Brand'/>
        <br/>
        <input
          type='text'
          id='type'
          ref={(input) => {Type = input;}}
          placeholder='Type'/>

         <br/>
        <input
          type='number'
          id='price'
          ref={(input) => {Price = input;}}
          placeholder='Price'/>

        <br/>
        <input
          type='number'
          id='ibu'
          ref={(input) => {IBU = input;}}
          placeholder='IBU'/>

        <br/>
        <input
          type='number'
          id='abv'
          ref={(input) => {ABV = input;}}
          placeholder='ABV'/>

        <br/>
        <textarea
          id='description'
          ref={(input) => {Description = input;}}
          placeholder='Beer description.'/>

        <br/>
        <input
          type='number'
          id='pints'
          ref={(input) => {Pints = input;}}
          placeholder='Pints'/>
        <br/>

        <button type='submit'>Add new beer</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewBeerSubmit: PropTypes.func
};

export default NewKeg;


