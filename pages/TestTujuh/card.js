export default function Card({ gambar, name, desc }) {
  return (
    <>
      <div className="rounded-md shadow-lg overflow-hidden mb-5 sm:w-64 md:w-80 sm:mb-0 lg:w-72">
        <img src={gambar} alt="cute cat" className="w-full" width={300} />
        <div>
          <div className="px-6 s-4">
            <div className="font-bold text-xl mb-2 text-gray-700">{name}</div>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
