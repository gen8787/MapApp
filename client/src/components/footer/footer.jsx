import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer-text py-3 border-top border-primary">
                <img src="/img/compass.png" width="150" height="150" alt=""></img>
                <p>MapApp</p>
            </div>
        );
    }
}

export default Footer;