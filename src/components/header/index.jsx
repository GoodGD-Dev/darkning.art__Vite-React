import PropTypes from 'prop-types'; // Importando PropTypes
import "./style.css";
import logoDark from "../../assets/logo.png";

const navBotoes = ["About", "Links", "Commission"];

function Header({ activeSection, setActiveSection }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo" data-aos="fade-down" data-aos-delay="200">
          <h1>
            <img src={logoDark} alt="Darkning.art logo" />
          </h1>
        </div>
        <nav>
          <ul className="navbar" data-aos="fade-up" data-aos-delay="400">
            {navBotoes.map((item) => (
              <li
                key={item}
                className={`item ${item === activeSection ? "active" : ""}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Adicionando a validação de tipos das props
Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Header;
