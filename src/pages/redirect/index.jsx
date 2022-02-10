import { Navigate } from 'react-router-dom';
import './style.scss';

function Redirecting() {
  return <Navigate to="/login" />;
}

export default Redirecting;
