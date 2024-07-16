import {
  Form,
  useLoaderData,
  useNavigation,
  useNavigate,
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

function EditContact() {
  const contact = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  return (
    <Form method="post">
      <FormGroup controlId="name" className="mb-2">
        <FormLabel>Name</FormLabel>
        <FormControl defaultValue={contact?.name} name="name" type="text" />
      </FormGroup>
      <FormGroup controlId="avatarURL" className="mb-2">
        <FormLabel>Avatar URL</FormLabel>
        <FormControl
          defaultValue={contact?.avatarURL}
          name="avatarURL"
          placeholder="https://example.org"
          type="text"
        />
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
      <Stack direction="horizontal" gap="2">
        <Button
          type="submit"
          variant="success"
          disabled={
            navigation.state === 'submitting' &&
            navigation.formAction?.includes('edit')
          }
        >
          {navigation.state === 'submitting' &&
          navigation.formAction?.includes('edit') ? (
            <>
              <Spinner
                animation="border"
                role="status"
                size="sm"
                aria-hidden="true"
                as="span"
              />
            </>
          ) : (
            'Save'
          )}
        </Button>
        <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Stack>
    </Form>
  );
}

export default EditContact;
