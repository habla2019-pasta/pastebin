import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import App from './index';

describe('App routes', () => {
  describe('path is /new', () => {
    let renderWithRouter;
    beforeEach(() => {
      renderWithRouter = (
        component,
        visitPaths = [],
      ) => {
        const history = createMemoryHistory();
        history.push(...visitPaths);
        return {
          ...render (<Router history={history}>
            {component}
          </Router>),
        };
      };
    });
    it('should redirect to Paste', () => {
      const { getByText } = renderWithRouter(<App />);
      expect(getByText('paste new')).toBeInTheDocument();
    });
  });
});