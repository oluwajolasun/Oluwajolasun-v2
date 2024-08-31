import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundPage from "./pages/BackgroundPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [theme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [theme]);

  return (
    <>
      {/* {console.log(theme)} */}
      {isLoading ? (
        <LoadingPage />
      ) : (
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
      )}
    </>
  );
};
export default App;
