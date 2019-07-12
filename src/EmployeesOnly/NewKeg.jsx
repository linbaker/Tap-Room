import React from 'react';

function NewKeg(){
  return (
    <div>
      <h1>Add a beer to the list:</h1>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name'/>

        <input
          type='text'
          id='brand'
          placeholder='Brand'/>

        <input
          type='text'
          id='type'
          placeholder='Type'/>


        <input
          type='number'
          id='price'
          placeholder='Price'/>

        <input
          type='number'
          id='ibu'
          placeholder='IBU'/>

        <input
          type='number'
          id='abv'
          placeholder='ABV'/>

        <textarea
          id='description'
          placeholder='Beer description.'/>

        <input
          type='number'
          id='pints'
          placeholder='ABV'/>

        <button type='submit'>Add new beer</button>
      </form>
    </div>
  );
}

export default NewKeg;

name: "Sour Flower",
brand: "Culmination",
type: "Gose & Sour",
price: "6",
ibu: "5",
abv: "5.5",
description: "Sour blonde ale with raspberry & lime zest",
pints: "124"
