import { Form, useLoaderData } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

function EditContact() {
  const contact = useLoaderData();

  return (
    <Form method="post">
      <FormGroup controlId="name" className="mb-2">
        <FormLabel>Name</FormLabel>
        <FormControl defaultValue={contact?.name} name="name" type="text" />
      </FormGroup>
      <FormGroup controlId="description" className="mb-2">
        <FormLabel>Description</FormLabel>
        <FormControl
          defaultValue={contact?.description}
          name="description"
          as="textarea"
          rows="3"
        />
      </FormGroup>
      <Button type="submit" variant="success">
        Save
      </Button>
    </Form>
  );
}

export default EditContact;
