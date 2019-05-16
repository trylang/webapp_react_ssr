import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const root = document.getElementById('root');

const render = Component => {
  hot(Comment);
  ReactDOM.render(
    <Component />,
    root
  )
}


render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default;
    render(NextApp);
  })
}
