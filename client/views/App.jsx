import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from '../config/router';

export default class App extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
          <li>
            <Link to="/detail/6543">6543得详情</Link>
          </li>
        </ul>
        <AppRouter />
      </nav>

    )
  }
}