import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from './services/contacts';

import Root from './routes/root';
import Index from './routes/index';
import Contact from './routes/contact';
import EditContact from './routes/edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    action: async () => {
      const contact = await createContact();
      return redirect(`/contacts/${contact.id}/edit`);
    },
    loader: async () => {
      const contacts = await getContacts();
      return contacts;
    },
    children: [
      { index: true, element: <Index /> },
      {
        path: '/contacts/:id',
        element: <Contact />,
        loader: async ({ params }) => {
          const contact = await getContact(params.id);
          return contact;
        },
      },
      {
        path: '/contacts/:id/edit',
        element: <EditContact />,
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const updates = Object.fromEntries(formData);
          await updateContact(params.id, updates);
          return redirect(`/contacts/${params.id}`);
        },
        loader: async ({ params }) => {
          const contact = await getContact(params.id);
          return contact;
        },
      },
      {
        path: '/contacts/:id/delete',
        action: async ({ params }) => {
          await deleteContact(params.id);
          return redirect('/');
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
