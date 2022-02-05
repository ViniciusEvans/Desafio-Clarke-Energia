import { useRef, useState } from 'react';
import hide from '../../assets/hide.svg';
import show from '../../assets/show.svg';
import './style.scss';

export function InputName({ state, setState }) {
  return (
    <>
      <label htmlFor="name">Nome</label>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="name"
        type="text"
      />
    </>
  );
}

export function InputEmail({ state, setState }) {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="email"
        type="email"
        required
      />
    </>
  );
}

export function InputPassword({ state, setState, children }) {
  const [passwordVisibility, setPasswordVisibility] = useState('password');
  const refInputPass = useRef();

  function handleChangeVisibility() {
    setPasswordVisibility(
      passwordVisibility === 'password' ? 'text' : 'password'
    );
  }

  function onFocus(focus) {
    refInputPass.current.style.border = focus
      ? '0.1rem #000 solid'
      : '0.1rem #00d084 solid';
  }
  return (
    <>
      <label htmlFor="password">{children}</label>

      <div ref={refInputPass} className="div-inputPassword ">
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          onFocus={() => onFocus(false)}
          onBlur={() => onFocus(true)}
          id="password"
          type={passwordVisibility}
          required
        />
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
