import { Outlet, useLoaderData } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function Root() {
  const contacts = useLoaderData();

  return (
    <Container fluid="md">
      <Row>
        <Col sm="4">{contacts.length ? <Nav></Nav> : <p>No contacts</p>}</Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Root;
