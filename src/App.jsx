import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-10">
        React Vite Project Starter
      </h1>
      <div>
        <div className="p-6 bg-base-200 rounded-box">
          <button className="btn btn-success">DaisyUI Button</button>
          <button class="btn btn-primary">Primary</button>
        </div>
      </div>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
