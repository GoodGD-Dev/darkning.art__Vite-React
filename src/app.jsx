import React, { useState, useEffect } from "react";
import AOS from 'aos';
import Header from "./components/header";
import About from "./pages/about";
import Links from "./pages/links";
import Commission from "./pages/commission";

function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [hasInteracted, setHasInteracted] = useState(false);

  // Inicialize o AOS quando o componente for montado
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  // Atualiza o estado quando o usuário clicar para mudar de seção pela primeira vez
  const handleSectionChange = (section) => {
    if (!hasInteracted) {
      setHasInteracted(true); // Marca que o usuário já interagiu
    }
    setActiveSection(section); // Muda a seção ativa
  };

  // Função para definir a animação baseada no estado de interação
  const getAnimation = () => {
    return hasInteracted ? "fade-right" : "fade-up";
  };

  // Função para definir o delay da animação baseada no estado de interação
  const getDelay = () => {
    return hasInteracted ? "100" : "600";
  };

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={handleSectionChange} />
      
      {activeSection === "About" && (
        <div data-aos={getAnimation()} data-aos-delay={getDelay()}>
          <About />
        </div>
      )}
      
      {activeSection === "Links" && (
        <div data-aos={getAnimation()} data-aos-delay={getDelay()}>
          <Links />
        </div>
      )}
      
      {activeSection === "Commission" && (
        <div data-aos={getAnimation()} data-aos-delay={getDelay()}>
          <Commission />
        </div>
      )}
    </div>
  );
}

export default App;
