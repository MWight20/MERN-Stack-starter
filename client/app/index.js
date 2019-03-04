// This will be this project's launching point
//   extending from 'dis/index.html' in our ReactDOM.render()

//import express from 'express';
// console.log("hello node.js project");


import ReactDOM from 'react-dom';
import React from 'react';

import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Helloworld from './components/Helloworld/Helloworld';


// const title = 'MERN boilerplate.';

// ReactDOM.render((
//   <div>{title}
//     <p>Here is some sample text FROM CLIENT APP INDEX</p>
//   </div>
//   ), document.getElementById('app')
// );

// module.hot.accept();

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/helloworld" component={Helloworld}/>
        <Route component = {NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
