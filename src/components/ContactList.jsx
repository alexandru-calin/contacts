import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

function ContactList({ contacts }) {
  return (
    <Nav variant="pills" as="ul" className="flex-column">
      {contacts.map((contact) => (
        <Nav.Item key={contact.id} as="li">
          <Nav.Link to={`/contacts/${contact.id}`} as={NavLink}>
            {contact.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default ContactList;
