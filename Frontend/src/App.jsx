import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavSection from "./components/NavBar";
import About from "./components/HomeAbout";
import HowIWork from "./components/HowIWork";
import JourneyAchievements from "./components/Journey";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AboutPage from "./pages/AboutPage";

function HomePage() {
  return (
    <>
      <About />
      <HowIWork />
      <JourneyAchievements />

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavSection />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
