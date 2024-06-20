import LocationIcon from '../assets/svg/LocationIcon';
import Envelope from '../assets/svg/Envelope';
import PhoneIcon from '../assets/svg/PhoneIcon';
import InstagramIcon from '../assets/svg/InstagramIcon';
import XIcon from '../assets/svg/XIcon';
import GithubIcon from '../assets/svg/GithubIcon';
import LinkedinIcon from '../assets/svg/LinkedinIcon';

function ContactAbout() {
  function sendEmail() {
    window.open('mailto:demioyeniyi@gmail.com');
  }

  return (
    <aside>
      <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-3 px-7">
        <li
          onClick={() =>
            window.open(
              'https://www.google.com/maps/place/Lagos/@6.5483694,3.1191428,11z/data=!3m1!4b1!4m6!3m5!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057!16zL20vMGxuZnk?entry=ttu',
              '_target'
            )
          }
          className="flex flex-col items-center cursor-pointer gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100 h-[48px] w-[48px] p-2 rounded-full">
            <LocationIcon></LocationIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Location:</h1>
            <p className="text-lg lg:text-xl">Lagos, NG</p>
          </div>
        </li>
        <li
          onClick={() => sendEmail()}
          className="flex items-center cursor-pointer flex-col gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100  h-[48px] w-[48px] p-2 rounded-full">
            <Envelope></Envelope>
          </span>
          <div className=" flex gap-2 items-center lg:text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Email:</h1>
            <p className="text-lg lg:text-xl">Demioyeniyi@gmail.com</p>
          </div>
        </li>
        <li
          onClick={() =>
            window.open('https://omnifood-demi1.netlify.app/', '_target')
          }
          className="flex items-center flex-col gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <PhoneIcon></PhoneIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Phone:</h1>
            <p className="text-lg lg:text-xl">+234 8131206124</p>
          </div>
        </li>
        <li
          onClick={() =>
            window.open('https://www.instagram.com/dermiie/', '_target')
          }
          className="flex items-center flex-col cursor-pointer gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <InstagramIcon></InstagramIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Instagram:</h1>
            <p className="text-lg lg:text-xl">@Dermiie</p>
          </div>
        </li>
        <li
          onClick={() => window.open('https://x.com/dermiie__', '_target')}
          className="flex items-center flex-col cursor-pointer gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <XIcon></XIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">X:</h1>
            <p className="text-lg lg:text-xl">@Dermiie__</p>
          </div>
        </li>
        <li
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/demi-oyeniyi-820746246/',
              '_target'
            )
          }
          className="flex items-center flex-col gap-1 cursor-pointer lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <LinkedinIcon></LinkedinIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">LinkedIn:</h1>
            <p className="text-lg lg:text-xl">Demi Oyeniyi</p>
          </div>
        </li>
        <li
          onClick={() => window.open('https://github.com/Dermiie', '_target')}
          className="flex items-center flex-col cursor-pointer gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center"
        >
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <GithubIcon></GithubIcon>
          </span>
          <div className="flex gap-2 items-center text-start ">
            <h1 className="text-lg lg:text-2xl font-semibold">Github:</h1>
            <p className="text-lg lg:text-xl">Dermiie</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default ContactAbout;
