import { useState } from 'react';

const FormTask = ({ onAdd, btnText }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!text) {
      alert('Please set the task name!');
      return;
    }

    if (!day) {
      alert('Please set task date!');
      return;
    }

    // Passing data object
    onAdd({ text, day, reminder });

    // Reset form
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='mt-5 mb-10' onSubmit={onSubmit}>
      <div className='mb-3'>
        <input
          type='text'
          className='px-4 py-2 rounded-lg border w-full'
          placeholder='Input task here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <input
          type='datetime-local'
          className='px-4 py-2 rounded-lg border w-full'
          placeholder='Input date here...'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            name='checkbox-demo'
            className='form-tick h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <span className='text-gray-900 font-medium'>
            Status{' '}
            <small>
              <em>(Completed / Incompleted)</em>
            </small>
          </span>
        </label>
      </div>
      <div className='mb-3'>
        <input
          type='submit'
          className='px-4 py-2 rounded-lg border w-full'
          value={btnText}
        />
      </div>
    </form>
  );
};

FormTask.defaultProps = {
  btnText: 'Submit'
};

export default FormTask;
