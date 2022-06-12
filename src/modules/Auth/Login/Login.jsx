import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(() => {
    loginWithRedirect();
  }, []);

  return (
    <div role="button" className={styles.loginButton} onClick={handleLogin} tabIndex={0}>
      LOGIN/ SIGN IN
    </div>
  )
};

export default Login;