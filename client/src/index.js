/*
 *@Author Andrew Basore May 2018
 *
 * Entry point for React Application that powers the TwitchTV Viewer
 * project for FreeCodeCamp
*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
