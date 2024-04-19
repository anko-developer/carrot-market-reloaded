export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-5">
        {/* {["Anko", "Me", "You", "Yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5 group">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-500 group-hover:text-red-500 group-">
              {person}
            </span>
            <div className="relative size-6 bg-red-500 text-white flex items-center justify-center rounded-full">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping"></div>
            </div>
          </div>
        ))} */}
        <div className="group flex flex-col">
          <input
            type="text"
            className="bg-gray-100 w-full"
            placeholder="Text..."
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
