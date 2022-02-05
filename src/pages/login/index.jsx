import { useState } from 'react';
import './style.scss';
import { InputEmail, InputPassword } from '../../components/inputs';
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
            <InputEmail></InputEmail>
            <InputPassword></InputPassword>
            <button className="submit-btn">login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
