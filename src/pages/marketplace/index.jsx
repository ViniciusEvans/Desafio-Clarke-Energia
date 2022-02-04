import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext/useContext";
import './style.scss';

function Dashboard() {
  const {msg} = useContext(AuthContext);
  console.log(msg);
  return (
    <div className="home">
      <h1>{msg}</h1>
    </div>
  );
}

export default Dashboard;
