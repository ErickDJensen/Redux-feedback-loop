import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
// import axios from 'axios';
import './App.css';
import { withRouter } from 'react-router'

import Page1 from '../Pages/Page1/Page1';
import Page2 from '../Pages/Page2/Page2';
import Page3 from '../Pages/Page3/Page3';
import Page4 from '../Pages/Page4/Page4';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path='/' component={Page1} />
          <Route path='/Page2' component={Page2} />
          <Route path='/Page3' component={Page3} />
          <Route path='/Page4' component={Page4} />
        </Router>
        <br />
      </div>
    );
  }
}

export default withRouter(App);
