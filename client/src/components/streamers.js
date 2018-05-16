/*
 *@Author Andrew Basore May 2018
 *
 * Streamer React semistateful-container that holds all the streamers.
 * 
 * this.state.streamers hold a list of Twitch usernames and
 * generates a StreamerTile React component for each username.
*/
import React, { Component } from 'react';
import StreamerTile from './streamer.js';
import './streamers.css';

class Streamers extends Component {
  constructor() {
    super();
    //Dummy data for "Pre-saved" streamers
    this.state = {
      streamers: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    };
  }



  render() {
    return (
      <div>
        <h2>Streamers</h2>
        {
          this.state.streamers instanceof Array && this.state.streamers.map( (username, id) =>{
          return <StreamerTile key={id}username={username} />
          })
        }
      </div>
    );
  }
}

export default Streamers;
