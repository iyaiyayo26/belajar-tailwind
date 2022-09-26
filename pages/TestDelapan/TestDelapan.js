import Gallery from "./Gallery";

export default function TestDelapan() {
  return (
    <>
      <div className="mt-10 p-2 font-inter grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 md:p-4">
        <h2 className="h-15 text-xl font-bold text-indigo-500 md:col-start-4 md:row-start-2 md:flex">
          <span className="self-center">Cats Gallery</span>
        </h2>
        <div className="h-15 text-lg font-bold text-indigo-400 md:col-start-2 md:row-start-2 md:flex">
          <span className="self-end">I 💛 🐈‍⬛</span>
        </div>

        <Gallery gambar="/cats/1.jpg" />
        <Gallery gambar="/cats/2.jpg" col="colStart3" />
        <Gallery gambar="/cats/3.jpg" />
        <Gallery gambar="/cats/4.jpg" />
        <Gallery gambar="/cats/5.jpg" />
        <Gallery gambar="/cats/6.jpg" col="colStart2" />
        <Gallery gambar="/cats/7.jpg" col="colStart4" />
        <Gallery gambar="/cats/8.jpg" />
        <Gallery gambar="/cats/9.jpg" col="colStart3" />
        <Gallery gambar="/cats/10.jpg" col="colStart3" />
      </div>
    </>
  );
}
