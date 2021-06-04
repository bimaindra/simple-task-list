import PropTypes from 'prop-types';

const Button = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      className='font-mono px-3 py-1 rounded-md text-sm tracking-wide bg-green-700 text-white '
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Click'
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
