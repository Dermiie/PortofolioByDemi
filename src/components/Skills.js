import html from '../assets/images/html-5.png';
import css from '../assets/images/css-3.png';
import javascript from '../assets/images/js.png';
import typescript from '../assets/images/typescript.png';
import bootstrap from '../assets/images/bootstrap.png';
import tailwind from '../assets/images/tailwindcss-logotype.svg';
import react from '../assets/images/react.png';

function Skills() {
  return (
    <div className="h-screen  bg-stone-50 text-center">
      <header className="mb-8">
        <h1 className="text-4xl font-medium   text-stone-700 tracking-normal  pt-[2rem]">
          SKILLS
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
        <div className="pt-10 w-[60%] mx-auto mt-7">
          <h2 className="text-3xl font-bold text-stone-400 mb-8">
            Technologies
          </h2>
          <div className="grid grid-cols-3 gap-5 place-items-center">
            <figure className="p-6 bg-blue-400 rounded-2xl">
              <img
                src={html}
                className="h-[4rem] w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="p-6 bg-blue-400 rounded-2xl">
              <img
                src={css}
                className="h-[4rem] w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="p-6 bg-blue-400 rounded-2xl">
              <img
                src={javascript}
                className="h-[4rem] w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="p-6 bg-blue-400 rounded-2xl">
              <img
                src={typescript}
                className="h-[4rem] w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="p-6 bg-blue-400 rounded-2xl">
              <img
                src={bootstrap}
                className="h-[4rem] w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="p-6 bg-blue-400 rounded-2xl">
              <img
                src={tailwind}
                className="h-[4rem] w-[4rem]"
                alt="stack-logo"
              ></img>
            </figure>
            <figure className="p-6 col-span-3 bg-blue-400 rounded-2xl">
              <img
                src={react}
                className="h-[4rem] w-[4rem]"
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
