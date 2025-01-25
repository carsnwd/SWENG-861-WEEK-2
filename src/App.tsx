import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { AuthProvider } from './contexts/AuthContext/AuthContext';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </MantineProvider>
  );
}
