import React, { Component } from "react";
import "./App.css";
import Crud from './components/Crud';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="App-Component">
      	  <div className="App-Component">
            <Crud />
          </div>
        </div>
      </div>
    );
  }
}

export default App;