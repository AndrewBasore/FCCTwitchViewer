/*
 *@Author Andrew Basore May 2018
 *
 * StreamerTile takes a username as a prop, and makes and http
 * request on the componentWillMount lifecycle hook. The resultant 
 * data is stored on the state object and the information is populated
 * within the render function.
*/

import React, { Component } from 'react';
import axios from 'axios';

export default class StreamerTile extends Component {

  constructor(props){
      super(props);
      this.state = {

      }
  }

  componentWillMount(){
    axios.get(`https://wind-bow.glitch.me/twitch-api/users/${this.props.username}`, (req,res)=>{
        res.json();
    }).then( res=> this.setState(res.data));
  }

  render() {
    return (
        <div>
            Hello I am {this.state.display_name}
            <div>
            <img src={this.state.logo} alt="logo" className="streamer-logo"/>
            </div>
        </div>
        
   
    )
  }
}
