import React from 'react';

export default function CarDetailsComponent({car}) {
  const {
    name,
    media,
    make,
    model,
    year,
    price
  } = car;
  return (<div>
    <h1>{name}</h1>
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={media} alt={name}/>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <ul>
          <li><strong>Model</strong>: {model}</li>
          <li><strong>Make</strong>: {make}</li>
          <li><strong>Year</strong>: {year}</li>
          <li><strong>Price</strong>: {price}</li>
        </ul>
      </div>
    </div>
  </div>);
};
