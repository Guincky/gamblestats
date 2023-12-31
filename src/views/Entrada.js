import React from 'react';
import '../views/entrada.css'; // Importe seu arquivo de estilo

const Entrada = () => {
  
  return (
    <div className="container">
    <div className="bolas-flutuantes">
        <div className="bola bola-1"></div>
        <div className="bola bola-2"></div>
        <div className="bola bola-3"></div>
        <div className="bola bola-4"></div>
        <div className="bola bola-5"></div>
        <div className="bola bola-6"></div>
        <div className="bola bola-7"></div>
        <div className="bola bola-8"></div>
        {/* Adicione mais bolas conforme necessário */}
      </div>

    <h1 className="titulo-bem-vindo">GAMBLESTATS</h1>
    <p className="descricao">Análises geradas por inteligência artificial para lhe fornecer informações privilegiadas. Lembre-se que são estastísticas e não palpites!</p>
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
