import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState('home');

  return (
    <div>
      <NavBar isActive={isActive} setIsActive={setIsActive}></NavBar>
      {isActive === 'home' && <HomePage></HomePage>}
      {isActive === 'about' && <About></About>}
      {isActive === 'skill' && <Skills></Skills>}
      {isActive === 'resume' && <Education></Education>}
    </div>
  );
}
//icon attributes in the footer
/* <div className="credits">
<h2>Credits</h2>
<p>
  Icons made by <a href="https://www.flaticon.com/authors/author-name" title="Author Name">Author Name</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</p>
</div> */

export default App;
