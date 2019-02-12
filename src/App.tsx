import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Overview from './Overview';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Overview}/>        
      </div>
      </Router>
    );
  }
}

export default App;
