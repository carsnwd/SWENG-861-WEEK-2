import { Button, Group } from '@mantine/core';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebaseConfig';

export function Login() {

    
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

//   const handleFacebookLogin = async () => {
//     try {
//       await signInWithPopup(auth, facebookProvider);
//     } catch (error) {
//       console.error('Facebook login error:', error);
//     }
//   };

  return (
    <Group justify="center" mt="xl">
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
      {/* <Button onClick={handleFacebookLogin}>Login with Facebook</Button> */}
    </Group>
  );
}