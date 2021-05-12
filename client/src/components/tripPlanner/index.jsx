import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tripPlanner.css';
import Map from '../map'

class TripPlanner extends Component {
    state = {

    }
    render() {
        return (
            <div className="container row mb-3">
                <div className="col-8">
                    <Map className="border"></Map>
                </div>

                <div className="col-4 text-white border-left border-primary">
                    <p className="">SOMETHING HERE</p>
                </div>
            </div>

        );
    }
}

export default TripPlanner;