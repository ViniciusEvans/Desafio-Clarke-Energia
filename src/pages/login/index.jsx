import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputEmail, InputPassword } from '../../components/inputs';
import './style.scss';
function Login() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  function handleLogin() {
    if (!verifyInputs()) {
      return;
    }
  }

  function verifyInputs() {
    if (!emailValue) {
      const backup = { ...error, emailError: true };
      setError(backup);
      return false;
    }
    if (!passwordValue) {
      const backup = { ...error, passwordError: true };
      setError(backup);
      return false;
    }
    setError({ emailError: false, passwordError: false });
  }

  return (
    <div className="login">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="form">
          <div className="title">
            <h1>Faça login para ter acesso</h1>
          </div>
          <div className="inputs">
            <InputEmail
              state={emailValue}
              setState={setEmailValue}
            ></InputEmail>
            {error.emailError && (
              <span style={{ fontSize: '1.6rem', color: 'red' }}>
                Precisa de email
              </span>
            )}
            <InputPassword
              state={passwordValue}
              setState={setPasswordValue}
            ></InputPassword>
            {error.passwordError && (
              <span style={{ fontSize: '1.6rem', color: 'red' }}>
                Precisa de senha
              </span>
            )}
            <button onClick={handleLogin} className="submit-btn">
              login
            </button>
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
