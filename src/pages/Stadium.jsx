import main from "../assets/images/logo.svg";
import ay from "../assets/images/stadium/any-color.svg";
import chj from "../assets/images/stadium/chj-color.svg";
import ddm from "../assets/images/stadium/ddm-color.svg";
import san from "../assets/images/stadium/san-color.svg";
import "../css/StyledStadium.css";
export function Stadium() {
  return (
    <div className="stadium">
      <div className="chungju st">
        <img src={chj} alt="청주" />
      </div>
      <div className="dongdaemun st">
        <img src={ddm} alt="동대문" />
      </div>
      <div className="main st">
        <img src={main} alt="메인" />
      </div>
      <div className="anyang st">
        <img src={ay} alt="안양" />
      </div>
      <div className="sangam">
        <img src={san} alt="상암" />
      </div>
    </div>
  );
}
