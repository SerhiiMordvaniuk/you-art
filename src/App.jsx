import "./App.css";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
    </>
  );
}

export default App;
