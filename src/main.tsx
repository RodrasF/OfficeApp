import React from 'react'
import ReactDOM from 'react-dom/client'
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>,
)
