import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, btnText, onAdd }) => {
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='font-mono font-bold text-xl'>{title}</h1>
        <Button text={btnText} onClick={onAdd} />
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Title',
  btnText: 'Add'
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired
};

export default Header;
