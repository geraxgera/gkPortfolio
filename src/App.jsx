import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Social from "./components/Social/Social";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Lass uns kennenlernen" title="Was ich kann" />
        <Programs />
        <Title subTitle="Das bin ich" title="Meine Geschichte" />
        <About setPlayState={setPlayState} />
        <Title subTitle="Work" title="Meine Arbeiten" />
        <Jobs />
        <Title subTitle="Social Media" title="Abonniere mich" />
        <Social />
        <Title subTitle="Kontakt" title="Schreib mir eine Nachricht" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
