import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Format from "./components/Format/Format";
import ForWhom from "./components/ForWhom/ForWhom";
import Volunteer from "./components/Volunteer/Volunteer";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Format />
        <ForWhom />
        <Volunteer />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
