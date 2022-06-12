import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ROUTES } from 'constants/routes';
import { removeItem } from 'utils/localstorage';

import styles from './Home.module.scss';

const Home = () => {
  const { logout } = useAuth0();

  const handleLogout = useCallback(() => {
    removeItem('token');
    logout({
      returnTo: `${window.location.origin}${ROUTES.login}`
    });
  }, []);

  return (
    <>
      <div>Home</div>
      <div role="button" className={styles.button} tabIndex={0} onClick={handleLogout}>Logout</div>
    </>
  )
};

export default Home;