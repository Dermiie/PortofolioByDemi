import LocationIcon from '../assets/svg/LocationIcon';
import MessageIcon from '../assets/svg/MessageIcon';
import PhoneIcon from '../assets/svg/PhoneIcon';

function ContactAbout() {
  return (
    <aside>
      <ul>
        <li className="flex gap-4 mb-12 justify-center">
          <span className="bg-blue-100 h-[48px] w-[48px] p-2 rounded-full">
            <LocationIcon></LocationIcon>
          </span>
          <div className="text-start">
            <h1 className="text-2xl font-semibold">Location:</h1>
            <p>Surulere, Lagos, NG</p>
          </div>
        </li>
        <li className="flex gap-4 mb-12 justify-center">
          <span className="bg-blue-100  h-[48px] w-[48px] p-2 rounded-full">
            <MessageIcon></MessageIcon>
          </span>
          <div className="text-start">
            <h1 className="text-2xl font-semibold">Email:</h1>
            <p>Demioyeniyi@gmail.com</p>
          </div>
        </li>
        <li className="flex gap-4 justify-center">
          <span className="bg-blue-100 h-[48px] w-[48px]  p-2 rounded-full">
            <PhoneIcon></PhoneIcon>
          </span>
          <div className="text-start">
            <h1 className="text-2xl font-semibold">Phone:</h1>
            <p>+234 8131206124</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default ContactAbout;
