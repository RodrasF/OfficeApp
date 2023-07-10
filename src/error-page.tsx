import React from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const routeError = useRouteError();
  console.error(routeError);

  const errorMessage = (error: unknown): JSX.Element => {
    if (isRouteErrorResponse(error)) {
      return (
        <>
          <h2>
            {error.status}
            {' '}
            {error.statusText}
          </h2>
          {error.data && <p>{error.data}</p>}
        </>
      );
    } if (error instanceof Error) {
      return <p>{error.message}</p>;
    } if (typeof error === 'string') {
      return <p>{error}</p>;
    }
    console.error(error);
    return <p>Unknown error</p>;
  };

  return (
    <div id="error-page">
      <Link to="/"><h1>Home</h1></Link>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      { errorMessage(routeError) }
    </div>
  );
}

export default ErrorPage;
