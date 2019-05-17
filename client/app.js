import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './views/App.jsx';

const root = document.getElementById('root');

const render = (Component) => {
  hot(Component);
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    root
  )
}


render(App);

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const NextApp = require('./views/App.jsx').default;
    render(NextApp);
  })
}
