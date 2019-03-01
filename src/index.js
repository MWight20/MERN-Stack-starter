// This will be this project's launching point
//   extending from 'dis/index.html' in our ReactDOM.render()

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'MERN boilerplate.';

ReactDOM.render(
  <div>{title}
    <p>Here is some sample text</p>
  </div>,
  document.getElementById('app')
);

module.hot.accept();