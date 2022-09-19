export default function TestTiga() {
  return (
    <>
      <hr className="my-20" />

      {/* buat button */}
      <button className="bg-violet-400 px-5 py-2 block mx-auto my-10 rounded-full text-white font-inter font-semibold hover:bg-violet-500 active:bg-violet-800 focus:ring  focus:ring-violet-600">Test me</button>

      {/* buat card isinya QOTD */}
      <div className="max-w-lg my-8 border rounded-lg mx-auto p-5 shadow-lg font-serif hover:bg-violet-400 group">
        <h5 className="mb-3 font-bold text-lg group-hover:text-white selection:bg-purple-700">Quote Of The Day</h5>
        <p className=" text-gray-800 group-hover:text-white selection:bg-yellow-400 first-letter:font-bold first-letter:text-7xl">
          Tidak semua hal harus sesuai dengan ekspektasi, kadang kita juga harus menelan pahitnya realita. Karena kita hidup di kehidupan yang diatur oleh tuhan, bukan diri sendiri
        </p>
      </div>

      {/* buat inputan */}
      <div className="max-w-lg my-8 border rounded-lg mx-auto p-5 shadow-lg ">
        <form action="">
          <label for="email">
            <span className="block font-semibold mb-3 after:content-['*'] after:text-red-700 after:mx-1">Email</span>
            <input
              type="email"
              id="email"
              placeholder="input email..."
              className="px-5 py-2 shadow-md w-full block focus:outline-none focus:ring focus:ring-violet-400 rounded invalid:text-red-600 invalid:focus:ring-red-500 invalid:focus:border-red-500 peer"
            />
            <p className="m-1 text-red-500 text-sm invisible peer-invalid:visible">Email is not valid</p>
          </label>
        </form>
      </div>
    </>
  );
}
