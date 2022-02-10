function ErrorMessage({ style, text }) {
  return (
    <>
      <span style={{ fontSize: '1.6rem', color: 'red', ...style }}>{text}</span>
    </>
  );
}

export default ErrorMessage;
