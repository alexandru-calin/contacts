import { NavLink } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';

function ContactList({ contacts }) {
  return (
    <ListGroup variant="flush" as="ul">
      {contacts.map((contact) => (
        <ListGroup.Item
          key={contact.id}
          action
          to={`/contacts/${contact.id}`}
          as={NavLink}
        >
          {contact.name || 'No name'}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ContactList;
