import React from "react";
import "./style.css";
import logoDark from "../../assets/logo.png";

const navBotoes = ["About", "Links", "Commission"];

function Header({ activeSection, setActiveSection }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <img src={logoDark} alt="Darkning.art logo" />
          </h1>
        </div>
        <nav>
          <ul className="navbar">
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

export default Header;