import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import api from '../services/api';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css';

function JogosDia() {

  const [jogos, setJogos] = React.useState([]);


  useEffect(() => {
  var dataHr = new Date();
  var dataHrFormatada = dataHr.getFullYear() + "-" + ("0" + (dataHr.getMonth() + 1)).substr(-2) + "-" + ("0" + dataHr.getDate()).substr(-2);
  var dataHrFormatada2 = dataHrFormatada.replace(/\//g, "-");
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
        jogo.goals05ht = jogos[i].goals05ht
        jogo.goals15ht = jogos[i].goals15ht
        jogo.goals15ft = jogos[i].goals15ft
        jogo.goals25ft = jogos[i].goals25ft
        jogo.goals35ft = jogos[i].goals35ft


        jogosArray.push(jogo);

      }
    }
    setJogos(jogosArray);

  }
  data();
}, []);

  function formatPalpite(palpite) {
    if (palpite === "1") {
      return "Casa vence";
    } else if (palpite === "X") {
      return "Empate";
    } else if (palpite === "2") {
      return "Fora vence";
    } else if(palpite === "1X"){
      return "Casa ou Empate";
    } else if(palpite === "X2"){
      return "Empate ou Fora";
    }else if(palpite === "12"){
      return "Casa ou Fora";
    } else if(palpite === "No"){
      return "Não"
    } else if(palpite === "Yes"){
      return "Sim"
    } else if(palpite > 90) {
      return "Casa vence";
    }

  }
  function formatPalpiteValor(palpite) {
    if (palpite > 80) {
      return (<ProgressBar  variant="success" animated now={palpite} label={`Probabilidade de acerto ${palpite}%`} />)
      } else if(palpite > 60 && palpite < 80){
        return (<ProgressBar variant="info" animated now={palpite} label={`Probabilidade de acerto ${palpite}%`} />)
      } else if(palpite > 40 && palpite < 60){
        return (<ProgressBar variant="warning" animated now={palpite} label={`Probabilidade de acerto ${palpite}%`} />)
      } else {
        return (<ProgressBar variant="danger" animated now={palpite} label={`Probabilidade de acerto ${palpite}%`} />)
      }
  }



  function ScreenreaderLabelExample(porcentagemPalpite) {
    if (porcentagemPalpite > 80) {
    return (<ProgressBar variant="success" animated now={porcentagemPalpite} label={`Probabilidade de acerto ${porcentagemPalpite}%`} />)
    } else if(porcentagemPalpite > 60 && porcentagemPalpite < 80){
      return (<ProgressBar variant="info" animated now={porcentagemPalpite} label={`Probabilidade de acerto ${porcentagemPalpite}%`} />)
    } else if(porcentagemPalpite > 40 && porcentagemPalpite < 60){
      return (<ProgressBar variant="warning" animated now={porcentagemPalpite} label={`Probabilidade de acerto ${porcentagemPalpite}%`} />)
    } else {
      return (<ProgressBar variant="danger" animated now={porcentagemPalpite} label={`Probabilidade de acerto ${porcentagemPalpite}%`} />)
    }
  }

  function renderItem(jogo) {
    return <tr>
      <td colSpan={5}>
        <div className="text-right"> 

          <h3>Estatisticas</h3>
        </div> 
        <ListGroup variant="dark" className='text-right'>

          <div className="row">
            <div className="col-md-6">
          <ListGroup.Item>
            <p><strong>Palpite Vencedor - <Badge bg='primary'>{formatPalpite(jogo.palpite_vencedor)}</Badge>{'\n'}</strong></p>            
            {ScreenreaderLabelExample(jogo.palpite_vencedor_valor)}
          </ListGroup.Item>
          <ListGroup.Item>
            <p><strong>Palpite para Ambos Marcar - <Badge bg={jogo.palpite_ambos === "Yes" ? 'success' : 'danger'}>{formatPalpite(jogo.palpite_ambos)}</Badge></strong></p>
          </ListGroup.Item>
          <ListGroup.Item>
          <p><strong>Acima de 0.5 Gols HT{'\n'}</strong></p>
          {formatPalpiteValor(jogo.goals05ht)}
          </ListGroup.Item>
          <ListGroup.Item>
          <p><strong>Acima de 1.5 Gols HT{'\n'}</strong></p>
          {formatPalpiteValor(jogo.goals15ht)}
          </ListGroup.Item>

        </div>
        <div className="col-md-6">
          <ListGroup.Item>
          <p><strong>Acima de 1.5 Gols FT{'\n'}</strong></p>
          {formatPalpiteValor(jogo.goals15ft)}
          </ListGroup.Item>
          <ListGroup.Item>
          <p><strong>Acima de 2.5 Gols FT{'\n'}</strong></p>
          {formatPalpiteValor(jogo.goals25ft)}
          </ListGroup.Item>
          <ListGroup.Item>
          <p><strong>Acima de 3.5 Gols FT{'\n'}</strong></p>
          {formatPalpiteValor(jogo.goals35ft)}            
          </ListGroup.Item>
        </div>
        </div>
        </ListGroup>
      </td>
    </tr>
  }

  function toggleExpand(jogo) {
    setJogos(jogos.map(function (e) {
      if (e === jogo) {
        e.open = !e.open;
      }
      return e;
    }));
  }

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
                      <div onClick={() => toggleExpand(jogo)}>
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

                  {jogo.open ? renderItem(jogo) : null}
                  </tbody>
                })}
            </Table>
          </div>
          </div>
          
      </div>
    </div>

  );
}

export default JogosDia;





