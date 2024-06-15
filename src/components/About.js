import ChevronRight from '../assets/svg/ChevronRight';

function About() {
  return (
    <div className="h-screen  bg-stone-50 text-center">
      <header className="mb-8">
        <h1 className="text-4xl font-medium   text-stone-700 tracking-normal  pt-[6rem]">
          ABOUT
        </h1>
      </header>
      <main className="w-[75%] mx-auto flex flex-col">
        <p className="text-xl">
          I'm a frontend and React JS developer with a Bachelor's Degree in
          Accounting which also depicts my natural love for numbers. I'm so
          passionate about software development and always opened to learning
          and improving my skillset. I'm an amazing team member, as i'm always
          ready to lend a hand and collaborate effectively to achieve set goals.
          I thrive on challenges and see every task as an opportunity to grow
          and improve
        </p>
        <div className="pt-10 flex w-[75%] mx-auto mt-7 flex-col gap-4">
          <h2 className="text-3xl font-bold text-stone-400">
            Software & web developer
          </h2>
          <p className="text-xl italic">
            I'm a developer that welcomes challenges and architect solutions. I
            code beautifully simple things and i love what i do
          </p>
          <div className="flex align-middle gap-12 justify-center text-start">
            <ul>
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
