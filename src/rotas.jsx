import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import LogOut from './pages/logout';
import Dashboard from './pages/marketplace';

function Rotas() {
    return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>);
}

export default Rotas;