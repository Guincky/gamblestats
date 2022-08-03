import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import api from '../services/api';

function JogosAmanha() {

  const [jogos, setJogos] = React.useState([]);


  useEffect(() => {
  var dataHr = new Date();
  var dataDay = dataHr.getDate() + 1;
  var dataHrFormatada = dataHr.getFullYear() + "-" + ("0" + (dataHr.getMonth() + 1)).substr(-2) + "-" + ("0" + dataDay).substr(-2);
  var dataHrFormatada2 = dataHrFormatada.replace(/\//g, "-");
  console.log(dataHrFormatada2);
  const data = async () => {
    const response = await api.get('/eventApi/'+ dataHrFormatada2 + '/-240/web_mfdz408n8lkuevmq');
    
    var data = response.data;
    var jogos = data.data;

    var jogosArray = [];

    for (var i = 0; i < jogos.length; i++) {
      var jogo = {};
      if (jogos[i].status === "NS" && jogos[i].winorlosemarket !== "") {
        jogo.league_name = jogos[i].league_name;
        jogo.home_team_name = jogos[i].localTeam.name;
        jogo.logo_home_team = jogos[i].localTeam.logo_path;
        jogo.away_team_name = jogos[i].visitorTeam.name;
        jogo.logo_away_team = jogos[i].visitorTeam.logo_path;
        jogo.starting_at = jogos[i].starting_time;
        jogo.palpite_vencedor = jogos[i].winorlosemarket;
        jogo.palpite_vencedor_valor = jogos[i].winorlosevalue;
        jogo.palpite_ambos = jogos[i].bttsmarket;
        jogo.palpite_ambos_valor = jogos[i].bttsvalue;


        jogosArray.push(jogo);

      }
    }
    setJogos(jogosArray);

  }
  data();
}, []);

  function formatPalpite(palpite) {
    if (palpite === "1") {
      return "Casa um vence";
    } else if (palpite === "X") {
      return "Empate";
    } else if (palpite === "2") {
      return "Fora um vence";
    } else if(palpite === "1X"){
      return "Casa ou Empate";
    } else if(palpite === "X2"){
      return "Empate ou Fora";
    }else if(palpite === "12"){
      return "Casa ou Fora";
    }

  }

  return (
    <div className="App">
      <div className="container">
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>Liga</th>
              <th>Jogo</th>
              <th>Horario</th>
              <th>Palpite Vencedor Jogo</th>
              <th>Palpite Ambos para Marcar</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map(jogo => (
              <tr key={jogo.home_team_name} className="collapsed" >
                <td>{jogo.league_name}</td>
                <td>
                  <img src={jogo.logo_home_team} alt="logo" width="30" height="30" /> {' '}
                  <Badge bg='primary'>{jogo.home_team_name}</Badge>
                  {" vs "}
                  <Badge bg='primary'>{jogo.away_team_name}</Badge> {' '}
                  <img src={jogo.logo_away_team} alt="logo" width="30" height="30" />
                </td>
                <td>{moment(jogo.starting_at).format("DD/MM/YYYY - hh:mm:ss A")}</td>
                <td>{formatPalpite(jogo.palpite_vencedor)} - {jogo.palpite_vencedor_valor}%</td>
                <td>{jogo.palpite_ambos} - {jogo.palpite_ambos_valor}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>

  );
}

export default JogosAmanha;





