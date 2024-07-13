import { Form, Outlet, useLoaderData } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ContactList from '../components/ContactList';

function Root() {
  const contacts = useLoaderData();

  return (
    <Container fluid="md" className="mt-4">
      <Row>
        <Col sm="3" className="mb-4 mb-sm-0">
          <Form method="post">
            <Button type="submit" variant="success" className="mb-4">
              New
            </Button>
          </Form>
          {contacts.length ? (
            <ContactList contacts={contacts} />
          ) : (
            <p>No contacts</p>
          )}
        </Col>
        <Col sm="6" md="4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Root;
