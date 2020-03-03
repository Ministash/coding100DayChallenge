import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IntroPage from './components/introPage';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" render={() => <IntroPage/>} />
        </div>
      </Router>

    );
  }
}

export default App;
