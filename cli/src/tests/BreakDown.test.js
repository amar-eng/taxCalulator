import { render } from '@testing-library/react';

import BreakDown from '../components/BreakDown';

describe('BreakDown', () => {
  const salary = Number('100000');
  it(
    'should render the component',
    () => {
      const { container } = render(<BreakDown salary={salary} />);
      expect(container).toBeTruthy();
    },

    it('should render the component with the correct salary', () => {
      const { getByTestId } = render(<BreakDown salary={salary} />);
      const salaryElement = Number(getByTestId('salary-id').textContent);
      expect(salaryElement).toEqual(salary);
    })
  );
});
