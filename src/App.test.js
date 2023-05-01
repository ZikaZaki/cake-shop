import { render, screen } from '@testing-library/react';
import App from './App';

test('renders number of cakes', () => {
  render(<App />);

  const cakes = screen.getByText(/Number of cakes/i);
  expect(cakes).toBeInTheDocument();
});
