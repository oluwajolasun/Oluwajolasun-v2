import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundPage from "./pages/BackgroundPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <BackgroundPage />
      <SkillsPage />
      <ExperiencePage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
};
export default App;
