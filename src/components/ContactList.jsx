import { NavLink } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';

function ContactList({ contacts }) {
  return (
    <ListGroup as="ul">
      {contacts.map((contact) => (
        <ListGroup.Item
          key={contact.id}
          action
          to={`/contacts/${contact.id}`}
          as={NavLink}
          variant="dark"
        >
          {contact.name || 'No name'}{' '}
          {contact.favorite && <span className="ms-auto">★</span>}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ContactList;
