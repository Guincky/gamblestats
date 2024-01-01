import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from 'antd';


import api from '../services/api';
import { Badge, Card, Avatar, Progress, Divider, Timeline, Collapse, Skeleton, Spin, Descriptions} from 'antd';
const { Panel } = Collapse;

function JogosDia() {

  const [jogos, setJogos] = useState([]);
  const [teams , setTeams] = useState([]);
  const [loadingStats , setLoadingStats] = useState(true);
  const [loadingTeams , setLoadingTeams] = useState(true);

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
        jogo.localteam_id = jogos[i].localteam_id
        jogo.visitorteam_id = jogos[i].visitorteam_id
        

        jogosArray.push(jogo);

      }
    }

    if (jogosArray.length > 0) {
      setJogos(jogosArray);
      setLoadingTeams(false);
    }

  }
  data();
}, []);

  async function getDadosTeams(id){
    const response = await api.get(`/getTeamStatsDirect/${id}`);
    return response.data;
  }

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


  function renderStats() {
    if (loadingStats) {
      return (
        <Skeleton active />
      )
    }

    if (teams) {
    return teams.map((team) => {
      return (
        <div className='row'>
          <div className='col-12'>
            <Card>
              <div className='row'>
                <div className='col-12'>
                  {team.stats.data.map((stat) => {
                    return (
                      <div className='row'>
                        <div className='col-12'>
                          <Descriptions title={team.name} layout="vertical" bordered>
                            <Descriptions.Item label={`Ultimos: ${stat.win.total + stat.lost.total} Jogos`}>
                              <Badge className='badgeIcons' status="success" text={`Vitórias: ${stat.win.total}`} /> {<br/>}
                              <Badge className='badgeIcons' status="error" text={`Derrotas: ${stat.lost.total}`} />                
                            </Descriptions.Item>
                            <Descriptions.Item label="Media Escanteios">{stat.avg_corners} {' '}
                              <FontAwesomeIcon icon={faSoccerBall} />
                            </Descriptions.Item>
                            <Descriptions.Item label="Media Gols Sofridos por Jogo">
                              <Badge className='badgeIcons' status="error" text={`Sofridos: ${stat.avg_goals_per_game_conceded.total}`} />
                              <FontAwesomeIcon icon={faSoccerBall} /> {<br/>}
                              <Badge className='badgeIcons' status="success" text={`Marcados: ${stat.avg_goals_per_game_scored.total}`} />
                              <FontAwesomeIcon icon={faSoccerBall} />
                            </Descriptions.Item>
                          </Descriptions>
                                                                        
                        </div>
                      </div>
                    )

                  }
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>    
      )
    })
  }
  }
  const onChange = async (value) => {
    if (value) {
      try {
      setLoadingStats(true);
      var teams = [];
      setTeams(teams);
      teams.push(await getDadosTeams(value[0]));
      teams.push(await getDadosTeams(value[1]));
      setTeams(teams);
      console.log({ teams})
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingStats(false);
      }
    }
    console.log('changed', value);
  }

  if (loadingTeams) {
    return (
      <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Spin/>
      </div>
    )
  } else {
    
    
  return (
    
    <>
    
      <div className="site-card-wrapper">
        <div className="row"
          style={{
            display: 'flex',
            marginTop: '20px',
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
                  <Collapse>
                    <Panel header="Informações" key="1">
                  <Timeline>
                    <Timeline.Item color="green"><strong>Vencedor: {formatPalpite(jogo.palpite_vencedor)}</strong>
                    <Progress percent={jogo.palpite_vencedor_valor} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green"><strong>Ambos Marcam: {formatPalpite(jogo.palpite_ambos)}</strong>
                    <Progress percent={jogo.palpite_ambos_valor} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green"><strong>Gols 0.5 HT:</strong>
                    <Progress percent={jogo.goals05ht} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green"><strong>Gols 1.5 HT:</strong>
                    <Progress percent={jogo.goals15ht} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green"><strong>Gols 1.5 FT:</strong>
                    <Progress percent={jogo.goals15ft} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green"><strong>Gols 2.5 FT:</strong>
                    <Progress percent={jogo.goals25ft} size="small" status="active" />
                    </Timeline.Item>
                    <Timeline.Item color="green"><strong>Gols 3.5 FT:</strong>
                    <Progress percent={jogo.goals35ft} size="small" status="active" />
                    </Timeline.Item>
                  </Timeline>
                  </Panel>
                  </Collapse>

                  <Divider orientation="left">Estatísticas</Divider>


                  <Collapse onChange={e => onChange([jogo.localteam_id, jogo.visitorteam_id])}>
                    <Panel header="Ambos os times" key="1">
                      {renderStats()}
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
}

export default JogosDia;
