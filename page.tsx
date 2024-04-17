export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-2 md:flex-row">
        <input
          required
          type="email"
          className="w-full rounded-full h-12 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-blue-600 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          placeholder="Search here..."
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required.
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium focus:scale-90 outline-none md:px-10  peer-invalid:bg-red-100">
          Search
        </button>
      </div>
    </main>
  );
}
