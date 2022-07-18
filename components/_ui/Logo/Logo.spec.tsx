import { render, cleanup } from '@testing-library/react';
import Logo from './Logo';

describe('<Logo />', () => {
  afterEach(cleanup);

  it('Check snapshot', () => {
    const { asFragment } = render(<Logo/>);
    expect(asFragment()).toMatchSnapshot();
  });
  
});
