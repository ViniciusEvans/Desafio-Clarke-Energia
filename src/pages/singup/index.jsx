import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { InputEmail, InputName, InputPassword } from '../../components/inputs';
import ErrorMessage from '../../components/errorMessage';
import './style.scss';

function Singup() {
  const [inputValues, setInputValues] = useState({
    nameValue: '',
    emailValue: '',
    passValue: '',
    repassValue: '',
  });
  const [validationMessages, setValidationMessages] = useState({
    emailValidation: '',
    passValidation: '',
    rePassValidation: '',
  });
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
    if (!verifyPassword()) {
      return;
    }
    setErrorMessage({
      errorName: false,
      errorPass: false,
      errorEmail: false,
      errorRepPass: false,
    });
  }

  function verifyInputs() {
    if (!inputValues.nameValue) {
      const backup = { ...errorMessage, errorName: true };
      setErrorMessage(backup);
      return false;
    }
    if (!inputValues.emailValue) {
      setValidationMessages({
        ...validationMessages,
        emailValidation: 'Falta o e-mail',
      });
      const backup = { ...errorMessage, errorEmail: true };
      setErrorMessage(backup);
      return false;
    }
    if (!inputValues.emailValue.match(/@/)) {
      setValidationMessages({
        ...validationMessages,
        emailValidation: 'E-mail inválido',
      });
      const backup = { ...errorMessage, errorEmail: true };
      setErrorMessage(backup);
      return false;
    }
    if (!inputValues.passValue) {
      setValidationMessages({
        ...validationMessages,
        passValidation: 'Falta a senha',
      });
      const backup = { ...errorMessage, errorPass: true };
      setErrorMessage(backup);
      return false;
    }
    if (!inputValues.repassValue) {
      setValidationMessages({
        ...validationMessages,
        rePassValidation: 'Falta repetir a senha',
      });
      const backup = { ...errorMessage, errorRepPass: true };
      setErrorMessage(backup);
      return false;
    }
    return true;
  }
  function verifyPassword() {
    if (inputValues.passValue !== inputValues.repassValue) {
      setValidationMessages({
        ...validationMessages,
        passValidation: 'Senhas não coincidem',
        rePassValidation: 'Senhas não coincidem',
      });
      const backup = { ...errorMessage, errorPass: true, errorRepPass: true };
      setErrorMessage(backup);
      return false;
    }
    return true;
  }

  return (
    <div className="Singup">
      <div className="container-left">
        <div className="form">
          <div className="title">
            <h1>Cadastre-se na plataforma</h1>
          </div>
          <div className="inputs">
            <InputName state={inputValues} setState={setInputValues} />
            {errorMessage.errorName && <ErrorMessage text="Falta o nome" />}
            <InputEmail state={inputValues} setState={setInputValues} />
            {errorMessage.errorEmail && (
              <ErrorMessage text={validationMessages.emailValidation} />
            )}
            <InputPassword
              state={inputValues}
              inputState={'passValue'}
              setState={setInputValues}
            >
              Senha
            </InputPassword>
            {errorMessage.errorPass && (
              <ErrorMessage text={validationMessages.passValidation} />
            )}
            <InputPassword
              state={inputValues}
              inputState={'repassValue'}
              setState={setInputValues}
            >
              Repetir senha
            </InputPassword>
            {errorMessage.errorRepPass && (
              <ErrorMessage text={validationMessages.rePassValidation} />
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
