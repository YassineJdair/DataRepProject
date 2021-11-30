import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default App;