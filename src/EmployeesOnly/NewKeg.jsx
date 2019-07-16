import React from 'react';
import { PropTypes } from 'prop-types';
import { v4 } from 'uuid';

function NewKeg(event) {
  // name: "Sour Flower",
  // brand: "Culmination",
  // type: "Gose & Sour",
  // price: "6",
  // ibu: "5",
  // abv: "5.5",
  // description: "Sour blonde ale with raspberry & lime zest",
  // pints: "124"

  event.preventDefault();
  props onAddingBeer({name: Name.value, brand: Brand.value, type: Type.value, price: Price.value, ibu: IBU.value, abv: ABV.value, description: Description.value, pints: Pints.value, id: v4() })

  Name.value = '';
  Brand.value=  '';
  Type.value=  '';
  Price.value=  '';
  IBU.value=  '';
  ABV.value = '';
  Description.value = '';
  Pints.value = '124';

  return (
    <div>
      <h1>Add a beer to the list:</h1>
      <form onSubmit>
        <input
          type='text'
          id='name'
          ref={(input) => {Name = input;}}
          placeholder='Name'/>

        <input
          type='text'
          id='brand'
          ref={(input) => {Brand = input;}}
          placeholder='Brand'/>

        <input
          type='text'
          id='type'
          ref={(input) => {Type = input;}}
          placeholder='Type'/>


        <input
          type='number'
          id='price'
          ref={(input) => {Price = input;}}
          placeholder='Price'/>

        <input
          type='number'
          id='ibu'
          ref={(input) => {IBU = input;}}
          placeholder='IBU'/>

        <input
          type='number'
          id='abv'
          ref={(input) => {ABV = input;}}
          placeholder='ABV'/>

        <textarea
          id='description'
          ref={(input) => {Description = input;}}
          placeholder='Beer description.'/>

        <input
          type='number'
          id='pints'
          ref={(input) => {Pints = input;}}
          placeholder='Pints'/>

        <button type='submit'>Add new beer</button>
      </form>
    </div>
  );
}

export default NewKeg;

NewBeer.propTypes = {
  onAddingBeer: PropTypes.func
}

