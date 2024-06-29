import { useState } from "react";
import InputFields from "./components/InputFields/InputFields";
import Breaker from "./components/Breaker/Breaker";
import DisplayInfo from "./components/Display/DisplayInfo";

function App() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-black justify-center  flex">
        {/* container */}
        <div className="lg:w-fit w-full h-fit bg-slate-700 p-4 rounded-sm lg:mt-12 m-7 md:m-10 ">
          
          {/* input fields */}
          
          <InputFields/>

          {/* white line */}
          <Breaker/>

          {/* display information */}
          <DisplayInfo/>

          {/* white line */}
          <Breaker/>

          <div>
            <span className="text-white text-xs">Users :- {numberOfUsers}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
