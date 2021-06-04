import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`flex justify-between items-start my-3 bg-red-100 px-3 py-2 rounded-md ${
        task.reminder ? 'bg-green-100' : ''
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h2 className='font-mono font-bold text-base md:text-lg tracking-wide mb-1'>
          {task.text}
        </h2>
        <p className='font-mono text-xs md:text-sm mb-1 tracking-wide'>
          {task.day}
        </p>
        <p className=' font-mono text-sm tracking-wide'>
          <small>
            <em>{task.reminder ? 'Completed' : 'Incompleted'}</em>
          </small>
        </p>
      </div>
      <div>
        <FaTimes
          className='text-pink-800 cursor-pointer mt-1'
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
