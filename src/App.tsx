import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Router } from './Router';
import { theme } from './theme';
import { AuthProvider } from './contexts/AuthContext/AuthContext';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <Router />
        <Notifications />
      </AuthProvider>
    </MantineProvider>
  );
}
