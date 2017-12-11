import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Composition from './Components/composition.js';
import Interview from './Components/interview.js';
import Paper from './Components/paper.js';

class App extends Component {
  render() {
    return (
      <div className="App">

      {/*Header*/}
        <header className="App-header">
          <h1 className="App-title">African Electronic Music</h1>

          {/*Homepage Links to Pages*/}
          <Router>
          <div className= "App-links">
            <ul>
              <div><li><Link to="/Composition"><button className="App-composition-button">Composition</button></Link></li></div>
              <div><li><Link to="/Interview"><button className="App-interview-button">Interview</button></Link></li></div>
              <div><li><Link to="/Paper"><button className="App-paper-button">Paper</button></Link></li></div>
            </ul>

            {/*Routing Paths*/}
            <Route exact path="/Composition" component={Composition} />
            <Route exact path="/Interview" component={Interview} />
            <Route exact path="/Paper" component={Paper} />
          </div>
          </Router>
        </header>

        {/*Body*/}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
