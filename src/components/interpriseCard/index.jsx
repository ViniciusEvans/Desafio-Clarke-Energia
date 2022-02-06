import './style.scss';

function InterpriseCard() {
  return (
    <div className="enterprise-card">
      <div className="image-logo"></div>
      <div className="enterprise-info">
        <span className="name">Nome: here</span>
        <span className="location">Localidade: location here</span>
        <span className="energy-cost">Custo por KWh: Cost here</span>
        <span className="limit-minimal">Limite mínimo: Limit here</span>
        <span className="clients">Clientes: 4000</span>
        <span className="rate">Avaliação: 5.0</span>
      </div>
    </div>
  );
}

export default InterpriseCard;
