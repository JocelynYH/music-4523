import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Composition from './components/composition.js';
import Interview from './components/interview.js';
import Paper from './components/paper.js';
import Home from './components/home.js';
import Poem from './components/poem.js';
import Team from './components/team.js';

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
                <img src={require('./images/rocket.gif')} className="App-logo"/>
              </Link></li>
            </ul>

            {/*Nav Bar*/}
            <div className= "nav">
            <ul>
              <li><Link to="/">
                <a>Home</a>
              </Link></li>
              <li><Link to="/Music">
                <a>Music</a>
              </Link></li>
              <li><Link to="/Interviews">
                <a>Interviews</a>
                </Link></li>
              <li><Link to="/Writings">
                <a>Writings</a>
              </Link></li>
              <li><Link to="/Poem">
                <a>Poem</a>
              </Link></li>
              <li><Link to="/Team">
                <a>Team</a>
                </Link></li>
            </ul>
            </div>

          </div>

            {/*Routing Paths*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/Music" component={Composition} />
            <Route exact path="/Interviews" component={Interview} />
            <Route exact path="/Writings" component={Paper} />
            <Route exact path="/Poem" component={Poem} />
            <Route exact path="/Team" component={Team} />

        </div>
        </Router>
      </div>
    );
  }
}

export default App;
