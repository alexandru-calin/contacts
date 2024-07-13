import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/contacts/:id', element: <Contact /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
