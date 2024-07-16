import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar className="border-bottom bg-dark-subtle">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Contacts
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
