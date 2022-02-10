import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from '../../components/errorMessage';
import { InputEmail, InputPassword } from '../../components/inputs';
import AuthContext from '../../contexts/AuthContext/useContext';
import './style.scss';

function Login() {
  let navigate = useNavigate();
  const notify = (message) => toast.error(message);
  const notifySucess = (message) => toast.success(message);
  const { setAuthToken } = useContext(AuthContext);
  const [emailMessage, setEmailMessage] = useState('');
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });
  const [inputValues, setInputValues] = useState({
    emailValue: '',
    passValue: '',
  });

  async function handleLogin() {
    if (!(await verifyInputs())) {
      return;
    }
    setError({ emailError: false, passwordError: false });
    try {
      const body = {
        email: inputValues.emailValue,
        password: inputValues.passValue,
      };
      const response = await fetch('http://localhost:3001/login', {
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
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        notify(data.mensagem);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  async function verifyInputs() {
    if (!inputValues.emailValue) {
      setEmailMessage('Falta o e-mail');
      setError({ ...error, emailError: true });
      return false;
    }
    if (!inputValues.emailValue.match(/@/)) {
      setEmailMessage('E-mail inválido');
      setError({ ...error, emailError: true });
      return false;
    }
    if (!inputValues.passValue) {
      setError({ ...error, passwordError: true });
      return false;
    }
    return true;
  }

  return (
    <div className="login">
      <ToastContainer />
      <div className="container-left"></div>
      <div className="container-right">
        <div className="form">
          <div className="title">
            <h1>Faça login para ter acesso</h1>
          </div>
          <div className="inputs">
            <InputEmail
              state={inputValues}
              setState={setInputValues}
            ></InputEmail>
            {error.emailError && <ErrorMessage text={emailMessage} />}
            <InputPassword
              state={inputValues}
              inputState={'passValue'}
              setState={setInputValues}
            >
              Senha
            </InputPassword>
            {error.passwordError && <ErrorMessage text="Falta a senha" />}
            <div>
              <button onClick={handleLogin} className="submit-btn">
                login
              </button>
            </div>
          </div>
          <span className="redirect-singup">
            Não é cadastrado? faça seu cadstro clicando
            <NavLink to="/singup">aqui</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
