import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://ee4884a3a50c40f086e77db49a56849b@o564398.ingest.sentry.io/5705099',
  integrations: [ new Integrations.BrowserTracing() ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<Router>
  <App />
</Router>, document.getElementById('root'));