import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import ImageHeader from "./components/ImageHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <ImageHeader />
        <div>
          <form className="mb-5">
            <input type="text" className="w-full p-2 rounded-sm mb-2" />
            <button type="submit" className="bg-gray-600 w-full p-2">
              Add
            </button>
          </form>
          <div className=" h-52 overflow-y-auto">
            <div className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2">
              <p className="">Clean the house</p>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="red" // Change the fill color to red
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-14H11v10h2V6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
