import { Routes, Route, useNavigate} from "react-router-dom";
import GlobalAuthContext from "./contexts/AuthContext/contextProvider";
import Redirecting from "./pages/redirect";
import Login from './pages/login';
import LogOut from './pages/logout';
import Dashboard from './pages/marketplace';


function Rotas() {
    return (
    <GlobalAuthContext value={{msg:'olá mundo'}}>       
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Redirecting />} />
        </Routes>
    </GlobalAuthContext>
    );
}

export default Rotas;