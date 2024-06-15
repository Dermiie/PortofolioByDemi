import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import { useState } from 'react';
import Contact from './components/Contact';

function App() {
  const [isActive, setIsActive] = useState('home');

  return (
    <div>
      <NavBar isActive={isActive} setIsActive={setIsActive}></NavBar>
      {isActive === 'home' && <HomePage></HomePage>}
      {isActive === 'about' && <About></About>}
      {isActive === 'skill' && <Skills></Skills>}
      {isActive === 'resume' && <Education></Education>}
      {isActive === 'contact' && <Contact></Contact>}
    </div>
  );
}
//icon attributes in the footer
/*  */

export default App;
