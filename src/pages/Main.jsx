import { Stadium } from "./Stadium";
import { ReactComponent as KimHyunTae } from "../assets/images/player/KimHyunTae.svg";
import { ReactComponent as LeeYoungJin } from "../assets/images/player/LeeYoungJin.svg";
import { ReactComponent as YunSangChul } from "../assets/images/player/YunSangChul.svg";
import { ReactComponent as JoByungYeong } from "../assets/images/player/JoByungYeong.svg";
import { ReactComponent as LeeYoungIk } from "../assets/images/player/LeeYoungIk.svg";
import { ReactComponent as ChoiYongSu } from "../assets/images/player/ChoiYongSu.svg";
import { ReactComponent as GoYoHan } from "../assets/images/player/GoYoHan.svg";
import { ReactComponent as Ricaldo } from "../assets/images/player/Ricardo.svg";
import { ReactComponent as Adi } from "../assets/images/player/Adi.svg";
import { ReactComponent as KimJinKyu } from "../assets/images/player/KimJinKyu.svg";
import { ReactComponent as HaDaeSung } from "../assets/images/player/HaDaeSung.svg";
import { ReactComponent as Molina } from "../assets/images/player/Molina.svg";
import playerInfo from "../Data/playerInfo";
import "../css/StyledMain.css";
const playerImages = {
  KimHyunTae,
  LeeYoungJin,
  YunSangChul,
  JoByungYeong,
  LeeYoungIk,
  ChoiYongSu,
  GoYoHan,
  Ricaldo,
  Adi,
  KimJinKyu,
  HaDaeSung,
  Molina,
};

function Main() {
  return (
    <>
      <Stadium />
      <div className="players">
        {playerInfo.map((player) => {
          const PlayerImage = playerImages[player.engName];

          return (
            <div className="player" key={player.sortId}>
              {PlayerImage ? <PlayerImage /> : null}
              <div className="playerName">{player.korName}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Main;
