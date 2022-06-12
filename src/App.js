import React, { Suspense } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

// guards
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

//modules
import Layout from 'core/layout/Layout';
import Login from 'modules/Auth/Login/Login';
import Home from 'modules/Home/Home';
import Callback from 'modules/Auth/Callback/Callback';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Routes>
          <Route path={ROUTES.login} element={(<GuestGuard><Login /></GuestGuard>)} />
          <Route path={ROUTES.home} element={(<AuthGuard><Home /></AuthGuard>)} />
          <Route path={ROUTES.callback} element={(<GuestGuard><Callback /></GuestGuard>)} />
          <Route path="/" element={<GuestGuard><Layout /></GuestGuard>} >
            <Route index element={<Navigate to={ROUTES.home} />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
