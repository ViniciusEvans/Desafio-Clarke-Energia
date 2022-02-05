import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputEmail, InputName, InputPassword } from '../../components/inputs';
import './style.scss';

function Singup() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [repassValue, setRePassValue] = useState('');

  return (
    <div className="Singup">
      <div className="container-left">
        <div className="form">
          <div className="title">
            <h1>Cadastre-se na plataforma</h1>
          </div>
          <div className="inputs">
            <InputName state={nameValue} setState={setNameValue} />
            <InputEmail state={emailValue} setState={setEmailValue} />
            <InputPassword state={passValue} setState={setPassValue}>
              Senha
            </InputPassword>
            <InputPassword state={repassValue} setState={setRePassValue}>
              Repetir senha
            </InputPassword>
            <button className="submit-btn">Cadastre-se</button>
          </div>
          <span className="redirect-singup">
            Já tem conta? faça seu login clicando
            <NavLink to="/singup">aqui</NavLink>
          </span>
        </div>
      </div>
      <div className="container-right"></div>
    </div>
  );
}

export default Singup;
