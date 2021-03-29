import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import App from './App';

describe('App routes', () => {
  let renderWithRouter;
  beforeEach(() => {
    renderWithRouter = (
      component,
      path = '/',
    ) => {
      const history = createMemoryHistory();
      history.push(path);
      return {
        ...render (<Router history={history}>
          {component}
        </Router>),
      };
    };
  });
  describe('when path is not set', () => {
    it('should redirect to Paste', () => {
      const { getByText } = renderWithRouter(<App />);
      expect(getByText('paste new')).toBeInTheDocument();
    });
  });
  describe('when path is set /', () => {
    it('should redirect to Paste', () => {
      const { getByText } = renderWithRouter(<App />, '/');
      expect(getByText('paste new')).toBeInTheDocument();
    });
  });
  describe('when path is incorrect', () => {
    it('should redirect to NotFound', () => {
      const { getByText } = renderWithRouter(<App />, chance.string({
        symbols: false,
      }));
      expect(getByText('404')).toBeInTheDocument();
    });
  });
});