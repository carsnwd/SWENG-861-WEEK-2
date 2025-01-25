import { Button, Group } from '@mantine/core';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebaseConfig';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '@/contexts/AuthContext/AuthContext';

export function Login() {

    const { userName } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error('Google login error:', error);
        }
    };

    const renderLoginBtns = () => {
        return <>
            <Button onClick={handleGoogleLogin} leftSection={<FcGoogle size={18} />}>Login with Google</Button>
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