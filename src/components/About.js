import ChevronRight from '../assets/svg/ChevronRight';

function About() {
  return (
    <div className="h-screen pt-[5.5rem] flex flex-col lg:pt-24 bg-stone-50 lg:text-center">
      <header className=" pt-4 mb-2  lg:mb-8 lg:pt-0">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-medium text-center  text-stone-700 tracking-normal  lg:pt-[2rem]">
          ABOUT
        </h1>
      </header>
      <main className="px-5 md:w-[85%] mx-auto flex flex-col">
        <p className="md:text-lg lg:text-xl">
          I'm a frontend and React JS developer. I'm so passionate about
          software development and always opened to learning and improving my
          skillset. I'm an amazing team member, as i'm always ready to lend a
          hand and collaborate effectively to achieve set goals. I thrive on
          challenges and see every task as an opportunity to grow and improve
        </p>
        <div className="pt-4 lg:pt-10 flex lg:w-[75%] lg:mx-auto mt-7 flex-col lg:gap-4">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-center text-stone-400">
            Software & web developer
          </h2>
          <p className="text-xl mb-6 lg:mb-0 italic">
            I'm a developer that welcomes challenges and architect solutions. I
            code beautifully simple things and i love what i do
          </p>
          <div className="flex flex-col align-middle  lg:flex-row lg:gap-12 justify-center lg:text-start">
            <ul className="overflow-x-auto ">
              <li className="text-xl mb-4 flex gap-3 ">
                <span className="flex gap-1">
                  <ChevronRight></ChevronRight>
                  <span className="font-bold text-gray-950">Birthday:</span>
                </span>

                <p>20th May 2001</p>
              </li>
              <li className="text-xl mb-4  flex gap-3">
                <span className="flex gap-1">
                  <ChevronRight></ChevronRight>
                  <span className="font-bold text-gray-950">Phone:</span>
                </span>
                <p>+234 8131206124</p>
              </li>
              <li className="text-xl mb-4 flex gap-3">
                <span className="flex gap-1">
                  <ChevronRight></ChevronRight>
                  <span className="font-bold text-gray-950">City:</span>
                </span>
                <p>Lagos, Nigeria</p>
              </li>
            </ul>
            <ul>
              <li className="text-xl mb-4 flex gap-3">
                <span className="flex gap-1">
                  <ChevronRight></ChevronRight>
                  <span className="font-bold text-gray-950">Email:</span>
                </span>
                <p>Demioyeniyi@gmail.com</p>
              </li>
              <li className="text-xl mb-4 flex gap-3">
                <span className="flex gap-1">
                  <ChevronRight></ChevronRight>
                  <span className="font-bold text-gray-950">City:</span>
                </span>
                <p>Lagos, Nigeria</p>
              </li>
              <li className="text-xl mb-4 flex gap-3">
                <span className="flex gap-1">
                  <ChevronRight></ChevronRight>
                  <span className="font-bold text-gray-950">Freelance:</span>
                </span>
                <p>Available</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
