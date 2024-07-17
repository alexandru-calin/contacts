import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  return (
    <div className="text-center mt-4">
      <h1>Ooops!</h1>
      <p>Sorry an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
