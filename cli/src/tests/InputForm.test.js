import { render, fireEvent } from '@testing-library/react';

import InputForm from '../components/InputForm';

describe(InputForm, () => {
  it('should correctly take the value from the input field when button is clicked', () => {
    const { getByTestId, getByRole } = render(<InputForm />);
    const inputElement = getByTestId('input-id');
    const buttonElement = getByRole(button, { name: 'Calculate' });
    fireEvent.change(inputElement, { target: { value: '100000' } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toEqual('100000');
  });
});
