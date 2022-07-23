import PropTypes from 'prop-types';
import css from "./ContactItem.module.css"
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.cnt_item}>
      <span className={css.cnt_name}>{name}:</span>
      <span className={css.cnt_number}>{number}</span>
      <button
      className={css.close}
        type="button"
        onClick={() => onDeleteContact(id)}
        
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;