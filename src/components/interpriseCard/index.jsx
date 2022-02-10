import './style.scss';

function InterpriseCard({ name, address, cost, min, clients, rate, logo }) {
  return (
    <div className="enterprise-card">
      <div className="image-logo" style={{ backgroundColor: logo }}></div>
      <div className="enterprise-info">
        <span className="name">Nome: {name}</span>
        <span className="address">Localidade: {address}</span>
        <span className="energy-cost">Custo por KWh: {cost}</span>
        <span className="limit-minimal">Limite mínimo: {min}</span>
        <span className="clients">Clientes: {clients}</span>
        <span className="rate">Avaliação: {rate}</span>
      </div>
    </div>
  );
}

export default InterpriseCard;
