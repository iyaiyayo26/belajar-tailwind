import classnames from "classnames";

export default function Gallery({ gambar, col }) {
  const column = {
    colStart3: "md:col-start-3",
    colStart2: "md:col-start-2",
    colStart4: "md:col-start-4",
  };
  const columnStart = column[col];

  return (
    <>
      <div className={classnames("bg-purple-500 h-15 aspect-[4/3] rounded-md md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500", columnStart)}>
        <div className="w-full h-full bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500">
          <img src={gambar} alt="gambar-kucing" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
