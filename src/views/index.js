import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Badge, Card, Avatar, Progress, Divider, Timeline, Collapse} from 'antd';
const { Panel } = Collapse;



function JogosDia() {

  const [jogos, setJogos] = useState([]);

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
      if (palpite > 90) {
        return "Casa Vence";
      } else {
      return "Casa ou Empate";
      }
    } else if(palpite === "X2"){
      return "Fora ou Empate";
    }else if(palpite === "12"){
      return "Casa ou Fora";
    } else if(palpite === "No"){
      return "Não";
    } else if(palpite === "Yes"){
      return "Sim";
    } else if(palpite > 90) {
      return "Casa vence";
    }

  }

  const onChange = (value) => {
    console.log('changed', value);
  }

  return (
    <>
    
      <div className="site-card-wrapper">
        <div className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {jogos.map((jogo) => (
            <div
              style={
                {
                  display: 'inline-block',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '80%',
                  height: 'auto',
                  marginBottom: '10px',
                }
              }
            >
              <Badge.Ribbon text={jogo.league_name} color="red">
                <Card title={jogo.home_team_name + " x " + jogo.away_team_name}>
                  <div className="row"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      marginBottom: '10px',
                    }}
                  >
                  <Avatar shape='square' src={jogo.logo_home_team} size={70}
                    style={{
                      marginRight: '10px',
                    }}
                  />
                  <Avatar shape='square' src={jogo.logo_away_team} size={70}
                    style={{
                      marginLeft: '10px',
                    }}
                  />
      
                  </div>
                  <Divider orientation="left">Palpites</Divider>
                  <Collapse onChange={onChange}>
                    <Panel header="Palpites Jogo" key="1">
                  <Timeline>
                    <Timeline.Item color="green">Vencedor: {formatPalpite(jogo.palpite_vencedor)}
                    <Progress percent={jogo.palpite_vencedor_valor} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green">Ambos Marcam: {formatPalpite(jogo.palpite_ambos)}
                    <Progress percent={jogo.palpite_ambos_valor} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green">Gols 0-5 HT:
                    <Progress percent={jogo.goals05ht} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green">Gols 1-5 HT:
                    <Progress percent={jogo.goals15ht} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green">Gols 1-5 FT:
                    <Progress percent={jogo.goals15ft} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green">Gols 2-5 FT:
                    <Progress percent={jogo.goals25ft} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green">Gols 3-5 FT:
                    <Progress percent={jogo.goals35ft} size="small" status="active" />
                    </Timeline.Item>
                  </Timeline>
                  </Panel>
                  </Collapse>
                  


                </Card>
              </Badge.Ribbon>
            </div>
          ))}
        </div>
      </div>

    </>
  );
 
}

export default JogosDia;





