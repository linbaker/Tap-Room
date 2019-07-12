import React from 'react';

function NewKeg(){
  return (
    <div>
      <h1>Add a beer to the list:</h1>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer name'/><br/><br/>

        <input
          type='text'
          id='type'
          placeholder='Beer type'/><br/><br/>

        <input
          type='number'
          id='ABV'
          placeholder='ABV'/><br/><br/>

        <input
          type='number'
          id='price'
          placeholder='Beer price'/><br/><br/>

        <textarea
          id='description'
          placeholder='Beer description.'/><br/><br/>

        <button type='submit'>Add new beer</button>
      </form>
    </div>
  );
}

export default AddKeg;

name: "Sour Flower",
brand: "Culmination",
type: "Gose & Sour",
price: "6",
ibu: "5",
abv: "5.5",
description: "Sour blonde ale with raspberry & lime zest",
pints: "124"
