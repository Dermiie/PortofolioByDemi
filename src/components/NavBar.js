import DocIcon from '../assets/svg/DocIcon';
import HomeIcon from '../assets/svg/HomeIcon';
import MessageIcon from '../assets/svg/MessageIcon';
import UserIcon from '../assets/svg/UserIcon';
import BookIcon from '../assets/svg/BookIcon';

function NavBar({ isActive, setIsActive }) {
  const activeStyle = 'p-4 border-2 rounded-full';

  return (
    <nav className="bg-blue-900 fixed top-0 w-full z-50 py-2">
      <ul className="flex justify-between px-5 pb-4 gap-2 text-stone-100 md:justify-around lg:gap-5  lg:justify-end lg:px-4 lg:pr-10 ">
        <li
          onClick={() => setIsActive('home')}
          className={`flex flex-col md:flex-row lg:flex-row gap-1 items-center py-2 rounded-full hover:text-stone-100 hover:cursor-pointer ${
            isActive === 'home' ? activeStyle : ''
          }`}
        >
          <HomeIcon></HomeIcon>
          <span>Home</span>
        </li>
        <li
          onClick={() => setIsActive('about')}
          className={`flex flex-col md:flex-row lg:flex-row gap-1 items-center py-2 rounded-full hover:text-stone-100 hover:cursor-pointer ${
            isActive === 'about' ? activeStyle : ''
          }`}
        >
          <UserIcon></UserIcon>
          <span>About</span>
        </li>
        <li
          onClick={() => setIsActive('skills')}
          className={`flex flex-col md:flex-row lg:flex-row gap-1 items-center py-2 rounded-full hover:text-stone-100 hover:cursor-pointer ${
            isActive === 'skills' ? activeStyle : ''
          }`}
        >
          <DocIcon></DocIcon>
          <span>Skills</span>
        </li>
        <li
          onClick={() => setIsActive('resume')}
          className={`flex flex-col md:flex-row lg:flex-row gap-1 items-center py-2 rounded-full hover:text-stone-100 hover:cursor-pointer ${
            isActive === 'resume' ? activeStyle : ''
          }`}
        >
          <MessageIcon></MessageIcon>
          <span>Portfolio</span>
        </li>
        <li
          onClick={() => setIsActive('contact')}
          className={`flex flex-col md:flex-row lg:flex-row gap-1 items-center py-2 rounded-full hover:text-stone-100 hover:cursor-pointer ${
            isActive === 'contact' ? activeStyle : ''
          }`}
        >
          <BookIcon></BookIcon>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
