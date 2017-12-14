import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Composition from './composition.js';
import Interview from './interview.js';
import Paper from './paper.js';
import '../App.css';

class Home extends Component {
    render() {
        return(
            <div className="Main">
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home;
