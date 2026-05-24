import "./App.css";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Plans />
      <Info />
      <Solutions />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
