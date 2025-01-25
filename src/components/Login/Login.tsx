import { Button, Group } from '@mantine/core';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '@/firebaseConfig';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext/AuthContext';
import { showNotification } from '@mantine/notifications';

export function Login() {
    const ACCOUNT_EXISTS_ERROR = 'auth/account-exists-with-different-credential';
    const { userName } = useAuth();

    const handleErrorLogin = (error: { code: string }, provider: 'Github' | 'Google') => {
        const errorMessage = error.code === ACCOUNT_EXISTS_ERROR ? `Account exists with different credential'` : `'Failed to login with ${provider}. Please try again.`;
        showNotification({
            title: 'Login Error',
            message: errorMessage,
            color: 'red',
          });
        console.error('Login error:', error);
    }

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            handleErrorLogin(error as { code: string }, 'Google');
        }
    };

    const handleGithubLogin = async () => {
        try {
            await signInWithPopup(auth, githubProvider);
        } catch (error) {
            handleErrorLogin(error as { code: string }, 'Github');

        }
    };


    const renderLoginBtns = () => {
        return <>
            <Button onClick={handleGoogleLogin} leftSection={<FaGoogle size={18} />}>Login with Google</Button>
            <Button onClick={handleGithubLogin} leftSection={<FaGithub size={18} />}>Login with Github</Button>
        </>
    }

    const renderLogoutBtn = () => {
        return <Button onClick={() => auth.signOut()}>Logout</Button>
    }

    return (
        <Group justify="center" mt="xl">
            {userName ? renderLogoutBtn() : renderLoginBtns()}
        </Group>
    );
}