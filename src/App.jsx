import { Header } from "./Layouts/Header";
import { Home } from "./Views/Home";
import { Contact } from "../src/Components/Contact/Contact.jsx"
import { Projects } from "../src/Components/Projects/Projects.jsx"
import { AboutMe } from "./Components/AboutMe/AboutMe.jsx";

export const App = () => {

  return (
    <>
      <div className="container-views">
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  )
}


