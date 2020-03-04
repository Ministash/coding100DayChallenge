import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IntroPage from './components/introPage';
import ChooseCharacter from "./components/chooseCharacterPage/chooseCharacterPage";

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" render={() => <IntroPage/>} />
          <Route exact path="/chooseCharacter" render={() => <ChooseCharacter />} />
        </div>
      </Router>

    );
  }
}

export default App;
