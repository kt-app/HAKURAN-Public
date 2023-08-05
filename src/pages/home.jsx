
import { Link } from "react-router-dom";
import { Slide } from "./components/slideflame.jsx";

export const Home = () => {
  return (
    <div className="bg-slate-200">
      <main role="main" className="w-full  flex  h-screen justify-center">

        <div className="m-auto w-5/6 sm:w-1/2">
          <h1 className="text-center text-6xl mb-16">Content</h1>
          <div className=" bg-gray-50 rounded-xl">

            <div className="bg-white rounded shadow ">

              <Slide />



            </div>
          </div>
          <p className="text-center mt-6">クリックすると内容が見れます</p>
          <p className="text-center">　</p>
        </div>
      </main>



      <div className="flex ">

        {/* ---schedule table--- */}










      </div>
    </div>

  );
};