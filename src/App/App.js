// @flow

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  NotFound, Paste, Stats, Status,
} from '../routes';

const App = (): React.Node => {
  return (
    <Switch>
      <Route exact path="/">
        <Paste />
      </Route>
      <Route exact path="/status">
        <Status />
      </Route>
      <Route exact path="/stats">
        <Stats />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
