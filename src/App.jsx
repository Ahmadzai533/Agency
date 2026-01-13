import { useState } from "react";
import Navbar from "./assets/Component/Navbar";
import Hero from "./assets/Component/Hero";
import TrustedBy from "./assets/Component/TrustedBy";
import Services from "./assets/Component/Services";
import OurWork from "./assets/Component/OurWork";
import Teams from "./assets/Component/Teams";
import ContuctUs from "./assets/Component/ContuctUs";
import Footer from "./assets/Component/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light "
  );
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <br></br>
      <h1>hahahahah</h1>

      <Services />
      <OurWork />
      <Teams />
      <ContuctUs />
      <Footer theme={theme} />
    </div>
  );
}
