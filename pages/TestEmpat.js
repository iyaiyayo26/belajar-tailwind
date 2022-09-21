export default function TestEmpat() {
  let background = "/cute-cat.jpg";
  return (
    <>
      <hr className="my-10" />

      <div className="mb-10 w-32 h-32 bg-black mx-auto rounded-lg shadow-xl hover:scale-100 hover:rotate-45 hover:bg-pink-600 hover:translate-x-5  "></div>

      <div className="mt-10 mb-10 w-40 h-40  mx-auto group bg-cover rounded-md" style={{ backgroundImage: `url(${background})` }}>
        <div className="w-full h-full bg-violet-600 rounded-md shadow-lg group-hover:rotate-180 origin-top-left transition duration-1000">
          <p className="font-inter p-5 text-center text-lg text-white uppercase group-hover:text-violet-600">Hover for a cute content!</p>
        </div>
      </div>

      {/* coba animate spin */}
      <img src="/pinwheel_icon.png" className="mt-10 mb-10 w-30 h-30 mx-auto animate-spin" />
      {/* pake custom spin */}
      <img src="/pinwheel_icon.png" className="mt-10 mb-10 w-30 h-30 mx-auto animate-spin-slow" />
    </>
  );
}
