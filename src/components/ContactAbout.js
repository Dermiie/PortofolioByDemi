import LocationIcon from '../assets/svg/LocationIcon';
import Envelope from '../assets/svg/Envelope';
import PhoneIcon from '../assets/svg/PhoneIcon';

function ContactAbout() {
  return (
    <aside>
      <ul className="flex flex-col gap-2 px-7">
        <li className="flex items-center gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center">
          <span className="bg-blue-100 h-[48px] w-[48px] p-2 rounded-full">
            <LocationIcon></LocationIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Location:</h1>
            <p>Surulere, Lagos, NG</p>
          </div>
        </li>
        <li className="flex items-center gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center">
          <span className="bg-blue-100  h-[48px] w-[48px] p-2 rounded-full">
            <Envelope></Envelope>
          </span>
          <div className=" flex gap-2 items-center lg:text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Email:</h1>
            <p>Demioyeniyi@gmail.com</p>
          </div>
        </li>
        <li className="flex items-center gap-1 lg:flex-row lg:gap-4 lg:mb-12 lg:justify-center">
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <PhoneIcon></PhoneIcon>
          </span>
          <div className="flex gap-2 items-center text-start">
            <h1 className="text-lg lg:text-2xl font-semibold">Phone:</h1>
            <p>+234 8131206124</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default ContactAbout;
