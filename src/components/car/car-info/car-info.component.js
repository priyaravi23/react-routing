import React, { Component } from 'react';
import fetchCars from '../car-mock-data';
import { func, object, arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';

class CarInfoComponent extends Component {
  static propTypes = {
    setCars: func,
    cars: arrayOf(object)
  };

  componentDidMount() {
    fetchCars().then(cars => {
      console.log('working with cars: ', cars);
      this.props.setCars(cars);
    }, err => {
      console.log(err);
    })
  }

  render() {
    // Get data from route props
    // const cars = this.props.route.data;
    // Map through cars and return linked cars
    const renderedCars = Object.values(this.props.cars).map(({id, name}) => {
      return (
        <Link
          to={`/cars/${id}`}
          className="list-group-item"
          key={id}>
          {name}
        </Link>
      )
    });
    return (
      <div>
        <div className="list-group">
          {renderedCars}
        </div>
      </div>
    );
  }
}

export default CarInfoComponent
