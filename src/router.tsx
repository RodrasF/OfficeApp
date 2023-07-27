import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error-page';
import CalendarPage from './routes/calendar/calendar-page';
import HomePage from './routes/home-page';
import Sidebar from './components/sidebar/sidebar';
import StatusPage from './routes/status/status-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'status/',
    element: <StatusPage />,
  },
  {
    path: 'calendar/',
    element: <CalendarPage />,
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
