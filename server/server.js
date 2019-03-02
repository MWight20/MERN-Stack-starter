const bodyParser = require('body-parser');
const express = require('express');
// const fs = require('fs');
// const historyApiFallback = require('connect-history-api-fallback');
//const mongoose = require('mongoose');
const path = require('path');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');

// const config = require('../config/config');
// const webpackConfig = require('../webpack.config');

// const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;


// Configuration
// ================================================================================================

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

app.get('/hello', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }

    console.info('>>> Open http://localhost:' + port + ' in your browser.', port);
});

module.exports = app;