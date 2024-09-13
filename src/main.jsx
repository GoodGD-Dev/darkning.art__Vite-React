import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Header from "./components/header";
import About from "./pages/about";
import Links from "./pages/links";
import Comission from "./pages/comission";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Header />
      <About />
      <Links />
      <Comission />
  </StrictMode>
);
