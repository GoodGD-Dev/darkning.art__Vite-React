import "./style.css";
import insta from "../../assets/svgs/instagram.svg"
import ytb from "../../assets/svgs/youtube.svg"
import cara from "../../assets/svgs/cara-app-logo-circle.svg"

function Links () {
  return (
    <div className="container">
      <section>
        <div className="contacts">
          <ul className="links">
            <li className="icons"><a href="" className="icon"><img src={insta} alt="Instagram Logo" className="insta" /></a></li>
            <li className="icons"><a href="" className="icon"><img src={ytb} alt="Youtube Logo" className="ytb" /></a></li>
            <li className="icons"><a href="" className="icon"><img src={cara} alt="Cara Logo" className="cara" /></a></li>
            <li className="icons"></li>
          </ul>
        </div>
        <div className="other">
          <ul>
            <a href="">
              <li className="pad">Colab 55</li>
              <li className="pad">redbubble</li>
              <li className="pad">inprnt</li>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Links;
