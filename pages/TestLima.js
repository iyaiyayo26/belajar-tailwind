export default function TestLima() {
  return (
    <>
      <hr className="my-10" />

      <div className="container mt-8 mx-auto">
        <div className="border rounded-md shadow-md p-10 relative">
          <div className="w-10 h-10 bg-violet-200 rounded-full flex fixed bottom-5 right-5 cursor-pointer">
            <a href="#" className="text-2xl m-auto">
              🔝
            </a>
          </div>
          <img src="/cute-cat.jpg" width={80} className="rounded-full float-left mr-3" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus nesciunt veritatis ea eos saepe ducimus. Dolorem quisquam cupiditate alias aliquid odio veritatis eos, esse, inventore iure aperiam, quas sunt est libero a
            nobis! Sapiente tempore ab in quidem ipsam quas quisquam velit optio natus, asperiores, error illo laborum quibusdam!
          </p>
        </div>
      </div>

      <div className="border rounded-md shadow-md p-10 container mx-auto mt-10 columns-3">
        <img src="https://source.unsplash.com/500x500?cat" alt="image" className="mb-3" />
        <img src="https://source.unsplash.com/500x500?cat" alt="image" className="mb-3" />
        <img src="https://source.unsplash.com/500x500?cat" alt="image" className="mb-3" />
        <img src="https://source.unsplash.com/500x500?cat" alt="image" className="mb-3" />
        <img src="https://source.unsplash.com/500x500?cat" alt="image" className="mb-3" />
        <img src="https://source.unsplash.com/500x500?cat" alt="image" className="mb-3" />
      </div>

      <hr className="my-10" />
    </>
  );
}
