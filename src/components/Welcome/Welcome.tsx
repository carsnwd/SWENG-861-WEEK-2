import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { useAuth } from '@/contexts/AuthContext/AuthContext';

export function Welcome() {
    const { userName } = useAuth();

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {userName ? `Welcome, ${userName}!` : 'Welcome!'}
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {!userName ? 'Please log in to access the app.' : 'You are now logged in.'}
      </Text>
    </>
  );
}
