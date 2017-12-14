import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Composition from './components/composition.js';
import Interview from './components/interview.js';
import Paper from './components/paper.js';
import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <div className="App">

      {/*Header*/}
      <Router>
        <div className="App-header">
          {/*Homepage Links to Pages*/}
          <div className= "App-links">

          {/*Logo Button*/}
            <ul>
              <li><Link to="/">
              <button className="App-logo-button">
                {/*<img src=require('./logo.svg')}/>*/}
                Electronic Music Logo
              </button>
              </Link></li>
            </ul>

            {/*Nav Bar*/}
            <div className= "nav">
            <ul>
              <li><Link to="/"><button className="button">Home</button></Link></li>
              <li><Link to="/Composition"><button className="button">Composition</button></Link></li>
              <li><Link to="/Interview"><button className="button">Interview</button></Link></li>
              <li><Link to="/Paper"><button className="button">Paper</button></Link></li>
            </ul>
            </div>
          </div>

            {/*Routing Paths*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/Composition" component={Composition} />
            <Route exact path="/Interview" component={Interview} />
            <Route exact path="/Paper" component={Paper} />

        </div>
        </Router>
      </div>
    );
  }
}

export default App;
