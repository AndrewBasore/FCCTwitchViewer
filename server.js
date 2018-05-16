const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/streamers', (req, res) => {
  var streamers = {};
  console.log("Hello!");
  const usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  axios.get('https://wind-bow.glitch.me/twitch-api/users/freecodecamp', (req, res) =>{
    res.json();
  }).then( res => {
    streamer = {
      display_name: res.data.display_name,
      id: res.data._id,
      bio: res.data.bio,
      logo: res.data.logo,
      updated_at: res.data.updated_at
    }
  })
  .catch( err => console.error(err))

  res.json(streamers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);