import "./App.css";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Prices from "./components/Prices/Prices";
import StudentsExample from "./components/StudentsExample/StudentsExample";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Prices />
        <StudentsExample />
      </main>
      <Footer />
    </>
  );
}

export default App;
