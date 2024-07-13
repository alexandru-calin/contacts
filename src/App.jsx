import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

import {
  createContact,
  getContact,
  getContacts,
  updateContact,
} from './services/contacts';

import Root from './routes/root';
import Contact from './routes/contact';
import EditContact from './routes/edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    action: async () => {
      const contact = await createContact();
      return contact;
    },
    loader: async () => {
      const contacts = await getContacts();
      return contacts;
    },
    children: [
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
