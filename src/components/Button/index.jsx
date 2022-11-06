import Prop from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: Prop.string.isRequired,
  onClick: Prop.func.isRequired,
  disabled: Prop.bool,
};
