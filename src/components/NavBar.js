import DocIcon from '../assets/svg/DocIcon';
import HomeIcon from '../assets/svg/HomeIcon';
import MessageIcon from '../assets/svg/MessageIcon';
import UserIcon from '../assets/svg/UserIcon';
import BookIcon from '../assets/svg/BookIcon';
import NavIcon from '../assets/svg/NavIcon';
import CancelIcon from '../assets/svg/CancelIcon';
import { useState, useEffect } from 'react';

function NavBar({ isActive, setIsActive }) {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(
    window.innerWidth <= 768
  );
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = 'p-4 border-2 rounded-full';

  useEffect(() => {
    const handleResize = () => {
      setMobileNavIsVisible(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function mobileNavHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {mobileNavIsVisible ? (
        <nav
          onClick={() => {
            mobileNavHandler();
          }}
          className="fixed top-0 right-0 p-8"
        >
          {!isOpen ? (
            <div className="absolute top-0 right-0">
              <NavIcon></NavIcon>
            </div>
          ) : (
            <div
              className={` top-0 right-0 w-screen h-screen pr-7 ${
                isActive === 'home' ? 'bg-blue-900' : 'bg-stone-50'
              } fixed  z-50 py-2 ${
                isOpen
                  ? 'opacity-100 visible translate-x-0 ease-in'
                  : 'opacity-0 invisible translate-x-full ease-out'
              }`}
            >
              <div className="absolute top-0 right-0">
                <CancelIcon></CancelIcon>
              </div>
              <ul
                className={`flex flex-col mt-9 gap-8 justify-center  items-center ${
                  isActive === 'home'
                    ? 'bg-blue-900  text-stone-100'
                    : 'bg-stone-50'
                }`}
              >
                <li
                  onClick={() => setIsActive('home')}
                  className={`${isActive === 'home' ? activeStyle : ''}`}
                >
                  Home
                </li>
                <li
                  onClick={() => setIsActive('about')}
                  className={`${isActive === 'about' ? activeStyle : ''}`}
                >
                  About
                </li>
                <li
                  onClick={() => setIsActive('skills')}
                  className={`${isActive === 'skills' ? activeStyle : ''}`}
                >
                  Skills
                </li>
                <li
                  onClick={() => setIsActive('resume')}
                  className={`${isActive === 'resume' ? activeStyle : ''}`}
                >
                  Portfolio
                </li>
                <li
                  onClick={() => setIsActive('contact')}
                  className={`${isActive === 'contact' ? activeStyle : ''}`}
                >
                  Contact
                </li>
              </ul>
            </div>
          )}
        </nav>
      ) : (
        <nav className="bg-blue-900 fixed top-0 w-full z-50 py-2">
          <ul className="flex justify-between px-7 pb-4 gap-2 text-stone-100 md:justify-around lg:gap-5  lg:justify-end lg:px-4 lg:pr-10 ">
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
      )}
    </div>
  );
}

export default NavBar;
