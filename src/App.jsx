import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <div>hello, world</div> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
