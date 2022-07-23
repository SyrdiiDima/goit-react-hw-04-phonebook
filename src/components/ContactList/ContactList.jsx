import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul >
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })
      ) : (
        <li >Not found name</li>
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};