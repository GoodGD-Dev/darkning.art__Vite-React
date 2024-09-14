import React, { useState } from "react";
import Header from "./components/header";
import About from "./pages/about";
import Links from "./pages/links";
import Commission from "./pages/commission";
import "./main"

function App() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === "About" && <About />}
      {activeSection === "Links" && <Links />}
      {activeSection === "Commission" && <Commission />}
    </div>
  );
}

export default App;