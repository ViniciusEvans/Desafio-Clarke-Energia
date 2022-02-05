import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputEmail, InputPassword } from '../../components/inputs';
import './style.scss';
function Login() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
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
            <InputPassword
              state={passwordValue}
              setState={setPasswordValue}
            ></InputPassword>
            <button className="submit-btn">login</button>
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
