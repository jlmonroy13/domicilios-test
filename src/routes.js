import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, HomePage, Test, NotFoundPage } from './components';


const routes = store => (
  <Route path="/" component={App} >
    <IndexRoute
      component={HomePage}
    />
    <Route
      path="/dashboard"
      component={Test}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);

export default routes;