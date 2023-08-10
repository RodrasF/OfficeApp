import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './error-page.module.scss';

function ErrorPage() {
  const routeError = useRouteError();

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
      return (
        <>
          <h2>{error.name}</h2>
          <p>{error.message}</p>
          <details>
            <summary>Stack trace</summary>
            <pre>{error.stack}</pre>
          </details>
        </>
      );
    } if (typeof error === 'string') {
      return <p>{error}</p>;
    }
    return <p>Unknown error</p>;
  };

  return (
    <div className={styles.errorPage}>
      <div className={styles.container}>
        <h2>Oops! Something went wrong.</h2>
        <p>We&rsquo;re sorry, but an error has occurred. Please try again later.</p>
        {errorMessage(routeError)}
      </div>
    </div>
  );
}

export default ErrorPage;
