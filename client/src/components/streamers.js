import React, { Component } from 'react';
import StreamerTile from './streamer.js';
import './customers.css';

class Streamers extends Component {
  constructor() {
    super();
    this.state = {
      streamers: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    };
  }



  render() {
    console.log("this.state: ", this.state.streamers);
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
