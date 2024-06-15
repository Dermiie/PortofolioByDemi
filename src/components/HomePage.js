function HomePage() {
  return (
    <div className="h-screen flex flex-col gap-4 bg-stone-200 pl-48 justify-center">
      <h1 className="text-4xl text-stone-700 font-extrabold tracking-wider">
        Oyeniyi Demilade
      </h1>
      <p className="text-xl font-semibold">I'm a developer 💻</p>
      <div>
        <button
          className="text-blue-400 hover:bg-blue-400 hover:p-4 hover:rounded-xl hover:text-xl hover:transition-all ease-in-out hover:text-stone-200 inline"
          onClick={() => {}}
        >
          Welcome to this part of the web... 😁😎{' '}
        </button>
      </div>
    </div>
  );
}

export default HomePage;
