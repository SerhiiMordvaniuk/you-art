import "./App.css";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
      </main>
    </>
  );
}

export default App;
