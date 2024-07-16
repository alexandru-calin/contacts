import { Form, useLoaderData, useNavigation } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

function Contact() {
  const contact = useLoaderData();
  const navigation = useNavigation();

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h3">{contact.name}</Card.Title>
        <Card.Text>{contact.description}</Card.Text>
        <Stack direction="horizontal" gap="2" className="justify-content-end">
          <Form action="edit">
            <Button type="submit" variant="primary">
              Edit
            </Button>
          </Form>
          <Form action="delete" method="post">
            <Button
              type="submit"
              variant="danger"
              disabled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? (
                <Spinner
                  animation="border"
                  role="status"
                  size="sm"
                  aria-hidden="true"
                  as="span"
                />
              ) : (
                'Delete'
              )}
            </Button>
          </Form>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default Contact;
