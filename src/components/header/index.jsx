import "./style.css";
import logo from "../../assets/logo.png";

const navBotoes = ["About", "Links", "Commission"];

function Header() {
  return (
    <header className="header">
        <div className="container">
          <div className="logo">
            <h1>
              <img src={logo} alt="Darkning.art logo" />
            </h1>
          </div>
          <nav>
            <ul className="navbar">
              <li className="item active">{navBotoes[0]}</li>
              <li className="item">{navBotoes[1]}</li>
              <li className="item">{navBotoes[2]}</li>
            </ul>
          </nav>
          </div>
    </header>
  );
}

export default Header;
