import React from 'react';
import '../views/entrada.css'; // Importe seu arquivo de estilo

const Entrada = () => {
  
  return (
    <div className="container">
    <h1 className="titulo-bem-vindo">GAMBLESTATS</h1>
    <p className="descricao">Análises geradas por inteligência artificial para lhe fornecer informações privilegiadas. Lembre-se que são estastísticas e não palpites!</p>
      <div className="botoes-container">
        <a href="/hoje">
        <button className="botao">Participe</button>
        </a>
      </div>
    </div>
  );
};

export default Entrada;
