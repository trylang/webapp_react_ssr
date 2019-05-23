import React from 'react';
import { StaticRouter } from 'react-router';
import { Provider, useStaticRendering } from 'mobx-react'
import App from './views/App';
import cnodeState from './store/cnode-state';

useStaticRendering(true);

export default (stores, routerContext, url) => {
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
}