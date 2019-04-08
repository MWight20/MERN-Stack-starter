const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port  = process.env.PORT || 8080;


// Configuration
// =================================================

// Express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API routes
require('./routes')(app);

app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("Express backend server started...");
});

module.exports = app;