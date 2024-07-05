import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App Name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Meu Local/i);
  expect(linkElement).toBeInTheDocument();
});

