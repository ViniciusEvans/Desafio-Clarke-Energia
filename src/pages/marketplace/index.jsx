import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from '../../components/errorMessage';
import logout from '../../assets/logout.svg';
import InterpriseCard from '../../components/interpriseCard';
import AuthContext from '../../contexts/AuthContext/useContext';
import './style.scss';

function Dashboard() {
  const navigate = useNavigate();
  const notifySucess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const { authToken, setAuthToken, remove } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');
  const [canChange, setCanChange] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    message: '',
    state: false,
  });
  const [interprises, setinterprises] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(async () => {
    await verfifyToken();
  }, []);
  useEffect(async () => {}, [offset]);
  async function verfifyToken() {
    try {
      const body = { bearerToken: authToken };
      const response = await fetch('http://localhost:3001/verifyToken', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setAuthToken(data.token);
        notifySucess('Logado com sucesso!');
      } else {
        notifyError(data.mensagem);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleLogout() {
    remove();
    navigate('/login');
  }

  async function handleGetInterprises() {
    if (!(await verifyInput())) {
      return;
    }
    setErrorMessage(false);
    try {
      const body = {
        energy_demand: searchValue,
        offset: (offset - 1) * 5,
      };
      const response = await fetch('http://localhost:3001/search', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.status === 200) {
        setinterprises(data);
        setCanChange(true);
        return true;
      } else {
        notifyError(data.mensagem);
        setCanChange(false);
        return false;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  async function verifyInput() {
    if (searchValue < 0) {
      setErrorMessage({
        message: 'o valor deve ser maior do que 0',
        state: true,
      });
      return false;
    }
    if (!searchValue) {
      setErrorMessage({ message: 'o input deve ser preenchido', state: true });
      return false;
    }
    return true;
  }
  async function handleOffset(param) {
    if (!canChange) {
      return;
    }
    setOffset(offset + param);
    if (offset + param === 0) {
      setOffset(offset);
      return;
    }
    const a = await handleGetInterprises();
    console.log(a);
  }

  return (
    <div className="dashboard">
      <ToastContainer />
      <div className="header">
        <div className="logo">
          <h1 className="ecommerce-name">clarke</h1>
          <small> energia</small>
        </div>
        <img onClick={handleLogout} src={logout} alt="Sair" />
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
        <button onClick={handleGetInterprises} className="submit-btn">
          Procurar
        </button>
      </div>
      {errorMessage.state && (
        <ErrorMessage
          style={{
            display: 'inline-block',
            width: '100%',
            textAlign: 'center',
          }}
          text={errorMessage.message}
        />
      )}
      <div className="ecommerces">
        <div className="matched-enterprises">
          {interprises.map((e) => {
            return (
              <InterpriseCard
                name={e.name}
                address={e.address}
                cost={e.costs}
                min={e.min_demand}
                clients={e.clients}
                rate={e.rate}
              />
            );
          })}
          <div className="carousel">
            <button onClick={() => handleOffset(-1)} className="btn back-btn">
              {'<'}
            </button>
            <span className="offset">{offset}</span>
            <button onClick={() => handleOffset(1)} className="btn next-btn">
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
