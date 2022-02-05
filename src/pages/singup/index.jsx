import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputEmail, InputName, InputPassword } from '../../components/inputs';
import ErrorMessage from '../../components/errorMessage';
import './style.scss';

function Singup() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [repassValue, setRePassValue] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    errorName: false,
    errorEmail: false,
    errorPass: false,
    errorRepPass: false,
  });

  function handleSingup() {
    if (!verifyInputs()) {
      return;
    }
  }

  function verifyInputs() {
    if (!nameValue) {
      const backup = { ...errorMessage, errorName: true };
      setErrorMessage(backup);
      return false;
    }
    if (!emailValue) {
      const backup = { ...errorMessage, errorEmail: true };
      setErrorMessage(backup);
      return false;
    }
    if (!passValue) {
      const backup = { ...errorMessage, errorPass: true };
      setErrorMessage(backup);
      return false;
    }
    if (!repassValue) {
      const backup = { ...errorMessage, errorRepPass: true };
      setErrorMessage(backup);
      return false;
    }
    setErrorMessage({
      errorName: false,
      errorPass: false,
      errorEmail: false,
      errorRepPass: false,
    });
  }

  return (
    <div className="Singup">
      <div className="container-left">
        <div className="form">
          <div className="title">
            <h1>Cadastre-se na plataforma</h1>
          </div>
          <div className="inputs">
            <InputName state={nameValue} setState={setNameValue} />
            {errorMessage.errorName && <ErrorMessage text="Falta o nome" />}
            <InputEmail state={emailValue} setState={setEmailValue} />
            {errorMessage.errorEmail && <ErrorMessage text="Falta o E-mail" />}
            <InputPassword state={passValue} setState={setPassValue}>
              Senha
            </InputPassword>
            {errorMessage.errorPass && <ErrorMessage text="Falta a senha" />}
            <InputPassword state={repassValue} setState={setRePassValue}>
              Repetir senha
            </InputPassword>
            {errorMessage.errorRepPass && (
              <ErrorMessage text="Falta repetir a senha" />
            )}
            <button onClick={handleSingup} className="submit-btn">
              Cadastre-se
            </button>
          </div>
          <span className="redirect-singup">
            Já tem conta? faça seu login clicando
            <NavLink to="/login">aqui</NavLink>
          </span>
        </div>
      </div>
      <div className="container-right"></div>
    </div>
  );
}

export default Singup;
