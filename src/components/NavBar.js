import DocIcon from '../assets/svg/DocIcon';
import HomeIcon from '../assets/svg/HomeIcon';
import MessageIcon from '../assets/svg/MessageIcon';
import UserIcon from '../assets/svg/UserIcon';
import BookIcon from '../assets/svg/BookIcon';

function NavBar({ isActive, setIsActive }) {
  const isActiveStyle = 'bg-blue-400 p-2 rounded-full cursor-pointer';

  return (
    <div className="flex flex-col h-screen gap-8 place-content-center fixed top-0 left-0 px-4">
      <div
        className={
          isActive === 'home'
            ? isActiveStyle
            : 'bg-stone-100 p-2 rounded-full cursor-pointer transition-all'
        }
        onClick={() => {
          setIsActive('home');
        }}
      >
        <HomeIcon></HomeIcon>
      </div>
      <div
        className={
          isActive === 'about'
            ? isActiveStyle
            : 'bg-stone-100 p-2 rounded-full cursor-pointer transition-all'
        }
        onClick={() => {
          setIsActive('about');
        }}
      >
        <UserIcon></UserIcon>
      </div>
      <div
        className={
          isActive === 'skill'
            ? isActiveStyle
            : 'bg-stone-100 p-2 rounded-full cursor-pointer transition-all'
        }
        onClick={() => {
          setIsActive('skill');
        }}
      >
        <DocIcon></DocIcon>
      </div>
      <div
        className={
          isActive === 'resume'
            ? isActiveStyle
            : 'bg-stone-100 p-2 rounded-full cursor-pointer transition-all'
        }
        onClick={() => {
          setIsActive('resume');
        }}
      >
        <BookIcon></BookIcon>
      </div>
      <div
        className={
          isActive === 'contact'
            ? isActiveStyle
            : 'bg-stone-100 p-2 rounded-full cursor-pointer transition-all'
        }
        onClick={() => {
          setIsActive('contact');
        }}
      >
        <MessageIcon></MessageIcon>
      </div>
    </div>
  );
}

export default NavBar;
