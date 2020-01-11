import React, { Component } from 'react';

class HomeComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <img src='img/cube.gif' alt="Cube" />
                </div>

                <div className="col-sm-6 col-md-4">
                    Browse our inventory for luxury, exotic and classic cars for sale
                </div>
            </div>
        );
    }
}

export default HomeComponent