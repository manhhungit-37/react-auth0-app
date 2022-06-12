import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { getItem } from 'utils/localstorage';

const GuestGuard = ({ children }) => {
  const location = useLocation();
  const auth0Token = getItem('token');

  if (auth0Token) {
    return (
      <Navigate to={ROUTES.home} state={{ from: location }} replace />
    );
  }

  return children;
};

export default GuestGuard;
