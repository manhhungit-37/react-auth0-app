import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ROUTES } from 'constants/routes';
import { setLocalStorageContent } from 'utils/localstorage';

const Callback = () => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const getAccessToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      setLocalStorageContent('token', token);
      navigate(ROUTES.home);
    } catch (error) {
      console.log('Authentication failure');
      navigate(ROUTES.login);
    }
  }, []);

  useEffect(() => {
    getAccessToken();
  }, []);

  return <div>Please wait</div>
};

export default Callback;