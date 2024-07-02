import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App Name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});

test('My location', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Location/i);
  expect(linkElement).toBeInTheDocument();
});

test('Actual Temperature', () => {
  render(<App />);
  const linkElement = screen.getByTestId('actual-temperature');
  expect(linkElement).toBeInTheDocument();
});
