import { Routes, Route, useNavigate } from 'react-router-dom';
import GlobalAuthContext from './contexts/AuthContext/contextProvider';
import Redirecting from './pages/redirect';
import Login from './pages/login';
import Singup from './pages/Singup';
import Dashboard from './pages/marketplace';

function Rotas() {
  return (
    <GlobalAuthContext value={{ msg: 'olá mundo' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Redirecting />} />
      </Routes>
    </GlobalAuthContext>
  );
}

export default Rotas;
