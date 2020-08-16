import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useToggle from '../src';

const App = () => {
  const [value, toggle] = useToggle();

  React.useEffect(() => {
    toggle();
  }, []);

  if (value) {
    return <div>yes!</div>;
  }
  return null;
};

describe('it', () => {
  it('toggles value', async () => {
    const { getByText } = render(<App />);
    const yesNode = await getByText('yes!');
    expect(yesNode).toBeInTheDocument();
  });
});
