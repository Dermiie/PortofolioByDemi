import ChevronRight from '../assets/svg/ChevronRight';

function Education() {
  return (
    <div className="bg-stone-50 text-center">
      <header className="mb-14 w-[80%] text-center mx-auto  pt-[2rem]">
        <div className="mb-4 w-[75%] mx-auto">
          <h3 className="text-3xl font-bold text-stone-400 mb-3">Summary</h3>
          <p className="text-xl">
            Aspiring tech-enthusiat dedicated to improving skills through
            hands-on learning and development work. Proficient in web
            development environments. Adept at using HTML5, CSS, JavaScript,
            React and other frameworks to produce clean code. Well-organized and
            collaborative team player with strong communication and analytical
            abilities.
          </p>
        </div>
      </header>
      <main className="flex w-[75%] mx-auto mt-8 gap-4">
        <div className="w-[50%]">
          <h3 className="text-3xl font-medium text-stone-500 mb-4">
            Personal Projects
          </h3>
          <div className="border p-4 text-start rounded-md shadow-md"></div>
        </div>
        <div className="w-[50%]">
          <h3 className="text-3xl font-medium text-stone-500 mb-4">
            Professional Experience
          </h3>
          <div className="border p-4 text-start rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-1 text-blue-400">
              Frontend Developer Intern
            </h3>
            <p className="bg-stone-100 rounded-md inline-block p-2">
              2011 - 2017
            </p>
            <p className="italic font-normal mb-1">
              RenMoney MFB, Lagos, Nigeria
            </p>
            <ul>
              <li className=" flex align-middle mb-3 text-lg font-normal">
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
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Education;
