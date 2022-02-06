import { useContext, useState } from 'react';
import logout from '../../assets/logout.svg';
import AuthContext from '../../contexts/AuthContext/useContext';
import './style.scss';
import InterpriseCard from '../../components/interpriseCard';

function Dashboard() {
  const { msg } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="dashboard">
      <div className="header">
        <div className="logo">
          <h1 className="ecommerce-name">clarke</h1>
          <small> energia</small>
        </div>
        <img src={logout} alt="Sair" />
      </div>
      <div className="search-enterprise">
        <label htmlFor="search">
          Digite o seu consumo mensal de energia (em KWh):
        </label>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: '5%' }}
          className="input-search"
          id="search"
          type="number"
        />
        <button className="submit-btn">Procurar</button>
      </div>
      <div className="ecommerces">
        <div className="matched-enterprises">
          <InterpriseCard />
          <InterpriseCard />
          <InterpriseCard />
          <InterpriseCard />
          <InterpriseCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
