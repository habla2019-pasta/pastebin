// @flow

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  NotFound, Paste,
} from '../routes';

const App = (): React.Node => {
  return (
    <Switch>
      <Route exact path="/">
        <Paste />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
