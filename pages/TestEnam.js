export default function TestEnam() {
  return (
    <>
      <div className="container font-inter p-8 bg-green-600 max-w-md sm:max-w-xl md:max-w-3xl mx-auto rounded-md">
        <h3 className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-6xl">seventeen</h3>
        <h2 className="text-slate-300 mb-5">
          <span className="font-bold text-lg sm:text-xl">6.1124.316</span> monthly listeners
        </h2>
        <img src="/foto-svt.png" alt="svt" className="rounded-xl mt-4 sm:mt-6 shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center" />
        <p className="text-white text-sm mt-3 sm:mt-5 sm:text-xl">
          Racking up 2 billion streams and selling 10 million albums, SEVENTEEN - comprised of S.COUPS, JEONGHAN, JOSHUA, JUN, HOSHI, WONWOO, THE 8, MINGYU, DK, SEUNGKWAN, VERNON and DINO - have rocketed to the forefront of the music scene
          fueled by a fiercely independent spirit and a nonpareil in-house creative ecosystem.
        </p>
        <div>
          <button className="bg-black px-7 py-3 block rounded-full mt-4 sm:mt-6">
            <img src="/Spotify_icon.png" alt="spotify" width={30} className="float-left mr-3" />
            <a href="https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH?si=vRceSOLHTJGsYURknXCMPw" className="text-green-600">
              Listen on Spotify
            </a>
          </button>
        </div>
      </div>

      <hr className="my-10" />
    </>
  );
}
