import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { createContact, getContact, getContacts } from './services/contacts';

import Root from './routes/root';
import Contact from './routes/contact';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
