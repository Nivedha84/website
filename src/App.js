
import './App.css';
import Education from './Components/SkillsContainer/SkillsContainer';
import { Header } from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import TopContent from './Components/TopContent/TopContent';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className='app'>
      <Header />
      <TopContainer />
      <Education />
      <ExperienceContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
}

export default App;
