import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navabar from "./components/navbar/Navabar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/service/Service";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navabar />
        <Hero />
      </section>
      <section id="Skill">
        <Parallax type="services" />
      </section>
      <section>
        <Service />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
