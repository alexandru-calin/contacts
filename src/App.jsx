import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { getContacts } from './services/contacts';

import Root from './routes/root';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: async () => {
      const contacts = await getContacts();
      return contacts;
    },
    children: [{ path: '/contacts/:id', element: <Contact /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
