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

  return (
    <>
      <label htmlFor="password">Senha</label>
      <div>
        <input id="password" type={passwordVisibility} required />
        <img
          src=""
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
