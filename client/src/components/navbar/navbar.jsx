import React, { Component } from "react"; // imrc
import { Link } from "react-router-dom";

// cc
class Navbar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3 border-bottom border-primary">

                <Link className="navbar-brand" to="/">
                    <img src="/img/compass.png" width="30" height="30" className="mx-1 d-inline-block align-top" alt=""></img>
                        MapApp
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-auto" id="navbarTogglerDemo02">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/munter-calculator">
                                Munter Calculator
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/trip-planner">
                                Trip Planner
                            </Link>
                        </li>

                    </ul>

                    <span className="">
                        <Link className="nav-item nav-link" to="/">
                            Account
                        </Link>
                    </span>

                </div>

            </nav>

        );
    }
}

export default Navbar;