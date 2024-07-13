import { Form, useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Contact() {
  const contact = useLoaderData();

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h3">{contact.name}</Card.Title>
        <Card.Text>{contact.description}</Card.Text>
        <Form action="edit">
          <Button type="submit" variant="primary">
            Edit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Contact;
