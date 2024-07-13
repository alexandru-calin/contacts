import { useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function Contact() {
  const contact = useLoaderData();

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h3">{contact.name}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          doloremque voluptas illo aperiam dolores ea?
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Contact;
