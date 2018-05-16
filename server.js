/*
  *@Author Andrew Basore May 2018
  * 
  * Entry-Point for nodejs part of TwitchTV App.
  * At this point there is no backend in use for this application
*/

const express = require('express');
const axios = require('axios');

const app = express();


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);