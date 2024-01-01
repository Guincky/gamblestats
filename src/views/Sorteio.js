import React from 'react';
import '../views/entrada.css'; // Importe seu arquivo de estilo

const Sorteio = () => {
  const redirecionarParaOutroSite = () => {
    // Substitua 'https://www.seusiteexterno.com' pelo URL do site externo para o qual deseja redirecionar
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSc0ruDnqYS7g8NdSAB55KjFCxcNEsu7V6asi7B1kYictNcjLA/viewform?usp=sf_link';
  };

  return (
    <div className="container">
      <h1 className="titulo-bem-vindo">GAMBLESTATS</h1>
      <p className="descricao">Estamos sorteando um prêmio total de 5 mil reais para ao todo 3 pessoas. Para participar basta clicar no botão abaixo e preencher os campos e realizar os pedidos. Boa sorte! </p>
      <div className="botoes-container">
        <button className="botao" onClick={redirecionarParaOutroSite}>
          Participe
        </button>
      </div>
    </div>
  );
};

export default Sorteio;
