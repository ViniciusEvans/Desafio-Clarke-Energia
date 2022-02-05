import { useState } from 'react';
import hide from '../../assets/hide.svg';
import show from '../../assets/show.svg';
import './style.scss';
export function InputEmail() {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" required />
    </>
  );
}

export function InputPassword() {
  const [passwordVisibility, setPasswordVisibility] = useState('password');

  function handleChangeVisibility() {
    setPasswordVisibility(
      passwordVisibility === 'password' ? 'text' : 'password'
    );
  }
  return (
    <>
      <label htmlFor="password">Senha</label>
      <div className="div-inputPassword">
        <input id="password" type={passwordVisibility} required />
        <img
          onClick={handleChangeVisibility}
          src={passwordVisibility === 'password' ? hide : show}
          alt={
            passwordVisibility === 'password'
              ? 'senha escondida'
              : 'senha visível'
          }
        />
      </div>
    </>
  );
}
