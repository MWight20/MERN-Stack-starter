var express = require('express');
const fs = require('fs');

module.exports = (app) => {
  // Read API routes from within 'api' folder
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
