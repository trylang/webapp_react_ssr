import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'mobx-react';

import App from './views/App.jsx';

import cnodeState from './store/cnode-state';

const root = document.getElementById('root');

const render = (Component) => {
  hot(Component);
  ReactDOM.render(
    <Provider cnodeState={cnodeState}>
      <Router>
        <Component />
      </Router>
    </Provider>,
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
