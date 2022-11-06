const { render, screen } = require('@testing-library/react');
import userEvent from '@testing-library/user-event';

import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'Testando'} />);

    const input = screen.getByPlaceholderText(/Search/i);
    expect(input.value).toBe('Testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'Testando'} />);

    const input = screen.getByPlaceholderText(/Search/i);
    const value = 'Testando';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'Testando'} />);
    expect(container).toMatchSnapshot();
  });
});
