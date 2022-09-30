// Imports
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// File imports
import BreakDown from './BreakDown';
// Styles imports
import '../styles/Form.scss';

const InputForm = () => {
  const [salary, setSalary] = useState(0);
  //   react-hook-form hook
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  // Submit form data to be calculated
  const onSubmit = (data) => {
    setSalary(data.salary);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your salary"
          className="form__input"
          {...register('salary')}
          data-testid="input-id"
        />
        <button
          type="submit"
          className="form__btn"
          disabled={!isDirty || !isValid}
          name="calculate"
        >
          Calculate
        </button>
      </form>

      <BreakDown salary={Number(salary)} />
    </>
  );
};

export default InputForm;
