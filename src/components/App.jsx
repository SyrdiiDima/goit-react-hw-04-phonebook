import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import FilterContact from './FilterContact/FilterContact';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contactItem => {
    setContacts(prevState => [...prevState, contactItem]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contactsName = contacts.map(contact => contact.name);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={handleAddContact} contactsName={contactsName} />

      <h2>Contacts</h2>
      <div>
        <FilterContact value={filter} onChange={changeFilter} />
        <ContactList
          visibleContacts={getVisibleContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};
