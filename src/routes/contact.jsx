import { Form, useLoaderData, useNavigation } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

function Contact() {
  const contact = useLoaderData();
  const navigation = useNavigation();

  return (
    <Card>
      <Card.Body>
        <Stack direction="horizontal" gap="3">
          <Image
            src={
              contact.avatarURL ||
              `https://ui-avatars.com/api/?name=${contact.name}&rounded=true&background=random&format=svg`
            }
            alt={`${contact.name}'s profile picture`}
            width="64"
            roundedCircle
          />
          <Card.Title as="h3">{contact.name}</Card.Title>
        </Stack>
        <Card.Text className="mt-2 text-muted">{contact.description}</Card.Text>
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
              disabled={
                navigation.state === 'submitting' &&
                navigation.formAction?.includes('delete')
              }
            >
              {navigation.state === 'submitting' &&
              navigation.formAction?.includes('delete') ? (
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
