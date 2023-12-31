import React from 'react';
import '../views/entrada.css'; // Importe seu arquivo de estilo

const Entrada = () => {
  
  return (
    <div className="container">
      <h1 className="titulo-bem-vindo">GAMBLESTATS</h1>
      <div className="botoes-container">
        <a href="/hoje">
        <button className="botao">Jogos de hoje</button>
        </a>
        <a href="/amanha">
          <button className="botao">Jogos de amanhã</button>
        </a>
      </div>
    </div>
  );
};

export default Entrada;
