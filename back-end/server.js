const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Middleware here

// API call definitions here

app.listen(3000, () => console.log('Server listening on port 3000!'));