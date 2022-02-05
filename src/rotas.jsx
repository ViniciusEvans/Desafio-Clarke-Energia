import { Route, Routes } from 'react-router-dom';
import GlobalAuthContext from './contexts/AuthContext/contextProvider';
import Login from './pages/login';
import Dashboard from './pages/marketplace';
import Redirecting from './pages/redirect';
import Singup from './pages/Singup';

function Rotas() {
  return (
    <GlobalAuthContext value={{ msg: 'olá mundo' }}>
      <Routes>
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Redirecting />} />
      </Routes>
    </GlobalAuthContext>
  );
}

export default Rotas;
