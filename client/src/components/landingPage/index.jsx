import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

class LandingPage extends Component {
    state = {

    }
    render() {
        return (
            <div className="landing p-4 m-5 text-white">
                <h1 className="display-1">Welcome to MapApp</h1>
                <img className="App-logo" src="/img/compass.svg" width="350" alt=""></img>
                <h1 className="display-5">plan your next adventure and be home for happy hour 🍻</h1>
                <button className="btn btn-lg btn-danger mt-3"><Link to="" className="text-decoration-none text-reset">View Map</Link></button>
            </div>

        );
    }
}

export default LandingPage;