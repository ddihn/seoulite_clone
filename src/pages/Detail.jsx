import playerInfo from "./Player Information/playerInfo";
import ShowTable from "./Record Table/ShowTable";
import header from "./Record Table/tableHeaders";
import { datas } from "./Record Table/tableData";
import styles from "./StyledShowDetail.css";
import Gyh from "../assets/images/detail/gyh.svg";
import korea from "../assets/images/nation/korea.jpg";
import kleagueAward from "../assets/images/awards/kleague.svg";
import best11 from "../assets/images/awards/best11.svg";
import leagueCup from "../assets/images/awards/leaguecup.svg";
import seoul from "../assets/images/club/seoul.png";
import { Stadium } from "./Stadium";

function Detail() {
  return (
    <>
      <div className="container">
        <Stadium />
        {playerInfo.map((info, index) => {
          return (
            <>
              <div className="fx">
                <div className="card-wrapper">
                  <div className="card">
                    <div>
                      <img src={Gyh} style={{ width: "100%" }} />
                    </div>
                    <div className="card-explain">
                      <div className="explain-top fx">
                        <div className="name fx">
                          {info.num}.{info.player}
                        </div>
                        <div className="birth-info">
                          <div className="nation-wp fx">
                            {/* {info.nation} */}
                            <img
                              className="nation"
                              src={korea}
                              alt="korea"
                              style={{ width: "25px" }}
                            />
                            <div className="birth fx">{info.birth}</div>
                          </div>
                          <div className="body fx">
                            <div className="position">{info.position}</div>
                            <div className="height">{info.height}</div>
                            <div className="weight">{info.weight}</div>
                          </div>
                        </div>
                      </div>
                      <div className="explain-bot">
                        <div className="bot-m fx">
                          <img className="cup" src={kleagueAward} alt="" />
                          {info.kleagueAward}
                        </div>
                        <div className="bot-m fx">
                          <img className="cup" src={leagueCup} alt="" />
                          {info.leagueCup}
                        </div>
                        <div className="bot-m fx">
                          <img className="cup" src={best11} alt="" />
                          {info.best11}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="explain">
                  <div className="title center">{info.title}</div>
                  <div className="intro">{info.introduction}</div>
                  <p className="total-cnt center">
                    <img
                      src={seoul}
                      alt="seoul"
                      style={{
                        position: "relative",
                        top: "4px",
                        width: "20px",
                      }}
                    />
                    <span className="ml-2">FC서울 통산</span>{" "}
                    <span className="ml-2">{info.totalGame}</span>
                    <span className="ml-2 mr-15">경기</span>
                    <span className="ml-2">{info.totalGoals}</span>
                    <span className="ml-2 mr-15">골</span>
                    <span className="ml-2">{info.totalAssist}</span>
                    <span className="ml-2 mr-15">도움</span>
                  </p>
                  <ShowTable headers={header} data={datas}></ShowTable>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Detail;
