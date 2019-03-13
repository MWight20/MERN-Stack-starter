var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // Read API routes from within 'api' folder
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
