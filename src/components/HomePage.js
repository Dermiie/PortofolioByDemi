import { ReactTyped } from 'react-typed';

function HomePage() {
  return (
    <div className="bg-blue-900 w-full h-screen pt-[7rem]">
      <div className="w-[70%] h-[100%] mx-auto pt-12 lg:justify-center gap-4 flex flex-col lg:gap-8">
        <p className="text-blue-400">Hi, my name is</p>
        <div>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-stone-300 mb-4">
            Demilade{' '}
            <ReactTyped
              strings={['Oyeniyi 🧙‍♂️']}
              typeSpeed={200}
              loop
            ></ReactTyped>
          </h1>
          <p className="text-xl font-semibold text-blue-300">
            I build amazing things for the web
          </p>
        </div>
        <p className="max-w-3xl text-sm lg:text-lg text-stone-50 ">
          I'm an aspiring tech enthusiast, i love to code and bring amazing
          designs to life. In my spare time, i derive joy in learning new
          technologies and further developing my skillset. Enjoy my part of the
          world wide web as you navigate through ⭐😊
        </p>
      </div>
    </div>
  );
}

export default HomePage;
