import React from 'react';
import '../views/entrada.css'; // Importe seu arquivo de estilo

const Entrada = () => {
  
  return (
    <div className="container">
      <h1 className="titulo-bem-vindo">GAMBLESTATS</h1>
      <div className="botoes-container">
        <a href="/pagina1">
          <button className="botao">Ir para Página 1</button>
        </a>
        <a href="/pagina2">
          <button className="botao">Ir para Página 2</button>
        </a>
      </div>
    </div>
  );
};

export default Entrada;
