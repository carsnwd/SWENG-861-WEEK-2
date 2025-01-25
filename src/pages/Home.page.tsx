import { Login } from '@/components/Login/Login';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Login/>
    </>
  );
}
