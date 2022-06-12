import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const CustomAuth0Provider = ({ children }) => {
  return (
    <Auth0Provider 
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
      defaultLoggedInPath="/"
      defaultLoggedOutPath="/login"
    >
      {children}
    </Auth0Provider>
  );
};

export default CustomAuth0Provider;
