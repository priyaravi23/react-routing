import React, { Component } from 'react';
import mockCarInfoService from '../car-mock-data';
import { Link } from 'react-router-dom';

class CarInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };

        this.mockCarInfoService = new mockCarInfoService();
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        this.mockCarInfoService.retrieveItems().then(cars => {
                this.setState({
                    cars: cars
                });
            }
        );
    }

    render() {
        // Get data from route props
        // const cars = this.props.route.data;
        // Map through cars and return linked cars
        const carNode = this.state.cars.map((car) => {
            return (
                <Link
                    to={"/cars/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default CarInfoComponent