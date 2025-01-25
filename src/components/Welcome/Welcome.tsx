import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export function Welcome() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
