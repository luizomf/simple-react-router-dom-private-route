import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Closed from '../pages/Closed';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/login/" component={Login} />
      <PrivateRoute exact path="/closed/" component={Closed} isClosed />
    </Switch>
  );
}
