import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode: 'light'/* prefersDarkMode ? 'dark' : 'light' */,
      },
    }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div id="layout">
          <Sidebar />
          <main id="content">
            <RouterProvider router={router} />
          </main>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default Router;
