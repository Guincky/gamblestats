import React, { useEffect } from 'react';

function Entrada() {
  return (
    <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Jogos</h1>

          <Table striped bordered hover variant="dark" className="text-center"
            responsive="md"

              style={{
                width: '100%',
                overflowX: 'auto',
                display: 'inline-block',



               }}
            >
          
            <thead>
              <tr>
                <th>Liga</th>
                <th>Jogo</th>
                <th>Horario</th>
                <th>Palpite</th>
                <th>0.5 HT</th>
                <th>1.5 HT</th>
                <th>1.5 FT</th>
                <th>2.5 FT</th>
                <th>3.5 FT</th>
                <th>Palpite Ambos</th>
              </tr>
            </thead>
              {jogos.map(jogo => {
                return <tbody><tr key={jogo.home_team_name} className="collapsed" >              
                  <td>{jogo.league_name}</td>
                  <td>
                    <div>
                    <img src={jogo.logo_home_team} alt="logo" width="30" height="30" /> {' '}
                    <Badge bg='primary'>{jogo.home_team_name}</Badge>
                    {" vs "}
                    <Badge bg='primary'>{jogo.away_team_name}</Badge> {' '}
                    <img src={jogo.logo_away_team} alt="logo" width="30" height="30" />
                    </div> 
                  </td>
                  <td>{moment(jogo.starting_at).format("DD/MM/YYYY - hh:mm:ss A")}</td>
                  <td>{formatPalpite(jogo.palpite_vencedor)} - {jogo.palpite_vencedor_valor}%</td>
                  <td>
                    <Badge bg='primary'>{jogo.goals05ht} %</Badge>
                  </td>
                  <td>
                    <Badge bg='primary'>{jogo.goals15ht} %</Badge>
                  </td>
                  <td>
                    <Badge bg='primary'>{jogo.goals15ft} %</Badge>
                  </td>
                  <td>
                    <Badge bg='primary'>{jogo.goals25ft} %</Badge>
                  </td>
                  <td>
                    <Badge bg='primary'>{jogo.goals35ft} %</Badge>
                  </td>
                  <td>{formatPalpite(jogo.palpite_ambos)} - {jogo.palpite_ambos_valor}%</td>
                </tr>
                </tbody>
              })}
          </Table>
        </div>
        </div>
        
    </div>
  </div>

  );
}

export default Entrada;
