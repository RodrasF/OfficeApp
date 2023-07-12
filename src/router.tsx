import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Calendar from './routes/calendar/calendar';
import Home from './routes/home';
import Sidebar from './components/sidebar/sidebar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'calendar/',
    element: <Calendar />,
  },
]);

function Router() {
  return (
    <div id="layout">
      <Sidebar />
      <main id="content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default Router;
