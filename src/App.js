// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Paste from './routes/Paste';
import NotFound from './routes/NotFound';

const App = (): React.Node => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Paste />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
