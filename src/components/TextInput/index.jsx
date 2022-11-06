import Prop from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input className="text-input" onChange={handleChange} value={searchValue} type="search" placeholder="Search" />
  );
};

TextInput.propTypes = {
  searchValue: Prop.string.isRequired,
  handleChange: Prop.func.isRequired,
};
