import "./style.css";

const aboutTitle = "Teste";
const aboutText = "exemplo 1 2 3.";

function About() {
  return (
    <div className="container">
      <section>
        <h2 className="aboutTitle">{aboutTitle}</h2>
        <p className="aboutContent">
          {aboutText}
        </p>
    </section>
    </div>
  );
}

export default About;