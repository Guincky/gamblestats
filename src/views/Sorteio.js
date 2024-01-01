import React from 'react';
import '../views/entrada.css'; // Importe seu arquivo de estilo

const Sorteio = () => {
  
  return (
    <div className="container">
    <h1 className="titulo-bem-vindo">GAMBLESTATS</h1>
    <p className="descricao">Estamos sorteando um prêmio total de 5 mil reais para ao todo 3 pessoas. Para participar basta clicar no botão abaixo e preencher os campos e realizar os pedidos. Boa sorte! </p>
      <div className="botoes-container">
        <a href="/hoje">
        <button className="botao">Participe</button>
        </a>
      </div>
    </div>
  );
};

export default Sorteio;
