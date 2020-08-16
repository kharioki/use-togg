import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useToggle from '../src';

const App = () => {
  const [value, toggle] = useToggle();

  if (value) {
    return <div>yes!!</div>;
  }
  return null;
};
describe('it', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<App />);
    const yesNode = await waitForElement(() => getByText('yes!!'));
    expect(yesNode).toBeInTheDocument;
  });
});
