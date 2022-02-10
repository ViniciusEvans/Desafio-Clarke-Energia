import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/marketplace';
import Redirecting from './pages/redirect';
import Singup from './pages/Singup';
import { useLocalStorage } from 'react-use';
import AuthProvider from './contexts/AuthContext/authProvider';

function PrivateRoute({ children, authToken }) {
  return authToken ? children : <Navigate to="/login" />;
}
function Rotas() {
  const [authToken, setAuthToken, remove] = useLocalStorage('token', '');

  return (
    <AuthProvider value={{ authToken, setAuthToken, remove }}>
      <Routes>
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute authToken={authToken}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Redirecting />} />
      </Routes>
    </AuthProvider>
  );
}

export default Rotas;
