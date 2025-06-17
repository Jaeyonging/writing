import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from './cookies';
import Loading from '../lotties/Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const token = getCookie('token');
  const isOnboard = getCookie('onboard')
  const hostname = window.location.hostname;

  useEffect(() => {

  }, [token]);

  if (isTokenValid === null) {
    return <Loading/>; // or a loading spinner
  }
  // if (!isTokenValid) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;