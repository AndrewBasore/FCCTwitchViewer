/*
 *@Author Andrew Basore May 2018
 *
 * Main App component. 
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Streamers from './components/streamers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Twitch Viewer!</h1>
        </header>
        <Streamers />
      </div>
    );
  }
}

export default App;
