import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './index';

describe('NotFound', () => {
  it('should render a 404', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('404')).toBeInTheDocument();
  });
});