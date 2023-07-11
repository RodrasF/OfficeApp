import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
