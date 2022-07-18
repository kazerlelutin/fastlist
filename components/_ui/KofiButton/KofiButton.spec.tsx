import { render, cleanup } from '@testing-library/react';
import KofiButton from './KofiButton';

describe('<KofiButton />', () => {
  afterEach(cleanup);

  it('Check snapshot', () => {
    const { asFragment } = render(<KofiButton/>);
    expect(asFragment()).toMatchSnapshot();
  });
  
});
