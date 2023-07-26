import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ErrorPage from './routes/error-page';
import CalendarPage from './routes/calendar/calendar-page';
import HomePage from './routes/home-page';
=======
import ErrorPage from './error-page';
import Calendar from './routes/calendar/calendar';
import Home from './routes/home';
>>>>>>> f2a23a1134a32a2637ad78f0d1f0d619ae65f0c0
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
