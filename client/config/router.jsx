
import { Route, Redirect } from "react-router-dom";
import React from 'react';

import List from '../views/topic-list/index.jsx';
import Detail from '../views/topic-detail/index.jsx';

export default function AppRouter() {
  return [
    <Route key="init" path="/" exact render={() => <Redirect to="/list"/>} />,
    <Route key="list" path="/list" component={List}/>,
    <Route key="detail" path="/detail/:detailId" component={Detail}/>,
  ]
};


