import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import PlantMachinery from "./pages/PlantMachinery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section */}
      <Home />
      <About />
      <Services />
     <PlantMachinery />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
