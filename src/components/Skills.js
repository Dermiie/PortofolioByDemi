import html from '../assets/images/html-5.png';
import css from '../assets/images/css-3.png';
import javascript from '../assets/images/js.png';
import typescript from '../assets/images/typescript.png';
import bootstrap from '../assets/images/bootstrap.png';
import tailwind from '../assets/images/tailwindcss-logotype.svg';
import react from '../assets/images/react.png';

function Skills() {
  return (
    <div className="h-screen mt-[6rem]  bg-stone-50 text-center">
      <header className="mb-2 md:mb-4 lg:mb-8">
        <h1 className="text-lg md:text-xl lg:text-4xl font-bold   text-stone-700 tracking-normal pt-2  lg:pt-[2rem]">
          SKILLS
        </h1>
      </header>
      <main className="w-[75%] mx-auto flex flex-col">
        <p className=" md:text-lg lg:text-xl">
          I'm a frontend and React JS developer with a Bachelor's Degree in
          Accounting which also depicts my natural love for numbers. I'm so
          passionate about software development and always opened to learning
          and improving my skillset. I'm an amazing team member, as i'm always
          ready to lend a hand and collaborate effectively to achieve set goals.
          I thrive on challenges and see every task as an opportunity to grow
          and improve
        </p>
        <div className="mt-4 p-5 lg:pt-10 lg:w-[60%] lg:mx-auto lg:mt-7 overflow-scroll">
          <h2 className="text-xl mb-4 lg:text-3xl font-bold text-stone-400 lg:mb-8">
            Technologies
          </h2>
          <div className="grid gap-4 lg:grid lg:grid-cols-3 lg:gap-5 place-items-center">
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full bg-blue-900 lg:rounded-2xl">
              <img
                src={html}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full bg-blue-900 lg:rounded-2xl">
              <img
                src={css}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem] "
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full bg-blue-900 lg:rounded-2xl">
              <img
                src={javascript}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full bg-blue-900 lg:rounded-2xl">
              <img
                src={typescript}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full bg-blue-900 lg:rounded-2xl">
              <img
                src={bootstrap}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full bg-blue-900 lg:rounded-2xl">
              <img
                src={tailwind}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="flex flex-col items-center lg:p-6 p-3 rounded-full col-span-3 bg-blue-900 lg:rounded-2xl">
              <img
                src={react}
                className="h-[2rem] w-[2rem] lg:h-[4rem] lg:w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Skills;
