import { useState } from 'react';
import './style.scss';
import { InputEmail, InputPassword } from '../../components/inputs';
function Login() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  return (
    <div className="login">
      <div className="container-login">
        <div className="title">
          <h1>Faça login para ter acesso a plataforma</h1>
        </div>
        <div className="form">
          <InputEmail></InputEmail>
          <InputPassword></InputPassword>
        </div>
      </div>
    </div>
  );
}

export default Login;
