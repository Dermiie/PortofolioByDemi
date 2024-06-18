import ChevronRight from '../assets/svg/ChevronRight';
import dicegame from '../assets/images/Dicegame Image.png';
import omnifood from '../assets/images/Omnifood Image.png';
import usepopcorn from '../assets/images/usePopcorn.png';

function Education() {
  return (
    <div className="bg-stone-50 mt-[5.5rem] lg:text-center">
      <header className=" lg:mb-14 lg:w-[80%] text-center mx-auto pt-[1rem] lg:pt-[2rem]">
        <div className="lg:mb-4 lg:w-[75%] px-7 mx-auto">
          <h3 className="lg:text-3xl md:text-xl text-lg font-bold text-center text-stone-400 lg:mb-3">
            Summary
          </h3>
          <p className="text-lg lg:text-xl">
            Aspiring tech-enthusiat dedicated to improving skills through
            hands-on learning and development work. Proficient in web
            development environments. Adept at using HTML5, CSS, JavaScript,
            React and other frameworks to produce clean code. Well-organized and
            collaborative team player with strong communication and analytical
            abilities.
          </p>
        </div>
      </header>
      <main className="flex flex-col gap-10 lg:flex-row w-[75%] overflow-scroll mx-auto mt-8 lg:gap-4">
        <div className="w-full lg:w-[50%]">
          <h3 className="lg:text-3xl text-lg text-center font-medium text-stone-500 lg:mb-4">
            Personal Projects
          </h3>
          <div className="border flex flex-col gap-7 p-4 text-start max-h-[24rem] overflow-scroll rounded-md shadow-md ">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <img
                src={omnifood}
                alt="omnifood-app"
                className="h-24 w-48 hover:h-28 hover:w-[12.2rem] hover:transition-all"
              ></img>
              <aside>
                <h3 className="text-center lg:text-lg lg:text-start font-semibold mb-1 text-blue-900">
                  Omnifood Web app
                </h3>
                <p className="bg-stone-100 rounded-md inline-block p-2 italic">
                  Key tools : HTML, CSS, JavaScript
                </p>
                <p>
                  A static webpage built for customers to subscribe and get
                  various meals and recipes delivered to them.
                </p>
              </aside>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <img
                src={dicegame}
                alt="dicgame-app"
                className="h-24 w-48 hover:h-28 hover:w-[12.2rem] hover:transition-all"
              ></img>
              <aside>
                <h3 className="text-center lg:text-lg lg:text-start font-semibold mb-1 text-blue-900">
                  Dice Game web app
                </h3>
                <p className="bg-stone-100 rounded-md inline-block p-2 italic">
                  Key tools: HTML, CSS, JavaScript
                </p>
                <p>
                  A simple dice game which could be played by two players
                  whereby the player with the highest accumulated point at the
                  end wins the game.
                </p>
              </aside>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <img
                src={usepopcorn}
                alt="Usepopcorn-app"
                className="h-24 w-48 hover:h-28 hover:w-[12.2rem] hover:transition-all"
              ></img>
              <aside>
                <h3 className="text-center lg:text-lg lg:text-start font-semibold mb-1 text-blue-900">
                  Usepopcorn Web app
                </h3>
                <p className="bg-stone-100 rounded-md inline-block p-2 italic">
                  Key tools : HTML, CSS, JavaScript, React.js
                </p>
                <p>
                  Use popcorn is a react app that helps users browse movies
                  through an online API, it fetches movies and also details of
                  the movie. It also saves the users watchlist and movie
                  ratings.
                </p>
              </aside>
            </div>
            <p className="text-center underline text-blue-900">
              Visit Github for more project 👇
            </p>
          </div>
          <a
            href="https://github.com/Dermiie?tab=repositories"
            className="flex justify-center"
          >
            <button className="px-4 py-1 lg:px-8 lg:py-3 rounded-full bg-blue-900 text-xl mt-5 text-white">
              Go to Github
            </button>
          </a>
        </div>
        <div className="w-full lg:w-[50%]">
          <h3 className="lg:text-3xl text-lg text-center font-medium text-stone-500 lg:mb-4">
            Professional Experience
          </h3>
          <div className="border flex flex-col gap-7 p-4 text-start max-h-[24rem] overflow-scroll rounded-md shadow-md ">
            <h3 className="text-center lg:text-lg lg:text-start font-semibold mb-1 text-blue-900">
              Frontend Developer Intern
            </h3>
            <p className="bg-stone-100 text-center inline-block rounded-md p-2">
              2011 - 2017
            </p>
            <p className="italic font-normal mb-1">
              RenMoney MFB, Lagos, Nigeria
            </p>
            <ul>
              <li className=" flex mb-3 text-lg font-normal">
                <span>
                  <ChevronRight></ChevronRight>
                </span>
                Sorted and organized files, spreadsheets, and reports.
              </li>
              <li className="flex text-lg mb-3 font-normal">
                <span>
                  <ChevronRight></ChevronRight>
                </span>
                Maintained an overall safe work environment with employee
                training programs and enforcement of safety procedures
              </li>
              <li className="flex text-lg mb-3 font-normal">
                <span>
                  <ChevronRight></ChevronRight>
                </span>
                Learned how to collaborate effectively with team members on
                projects
              </li>
              <li className="flex text-lg mb-3 font-normal">
                <span>
                  <ChevronRight></ChevronRight>
                </span>
                Developed more proficiency in programming languages like
                JavaScript and also the React library
              </li>

              <li className=" text-center underline text-blue-900 mb-3 font-normal">
                Checkout my resume below 👇
              </li>
            </ul>
          </div>
          <a
            href="file:///C:/Users/44744/Downloads/CV%20DEMI.pdf"
            className="flex justify-center mb-4"
          >
            <button className="px-4 py-1 lg:px-8 lg:py-3 rounded-full bg-blue-900 text-xl mt-5 text-white">
              Go to Resume
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Education;
