import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [userName, setUserName] = useState("Enter name");
  const [userAge, setUserAge] = useState("Enter Age");

  const addValueToFirebase = () => {
    if (userAge < 100 && userAge > 0 && userName != "") {
      alert(`${userName} and ${userAge} is added successfully`);
    } else {
      alert("invalid information");
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-black justify-center p-11 flex">
        {/* container */}
        <div className="lg:w-fit w-2/3 h-fit bg-slate-700 p-4 rounded-sm">
          {/* input fields */}
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-2 ">
            <input
              className="lg:col-span-2 col-span-1 h-fit rounded-sm p-[2px] outline-none"
              placeholder={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="lg:col-span-2 col-span-1 h-fit rounded-sm p-[2px] outline-none"
              placeholder={userAge}
              onChange={(e) => setUserAge(e.target.value)}
              type="number"
            />
            <button
              className="lg:col-span-1 col-span-1 bg-slate-950 text-white rounded-[3px] hover:bg-slate-900 ease-in-out duration-300"
              onClick={() => addValueToFirebase()}
            >
              Add
            </button>
          </div>

          {/* white line */}
          <div className=" border-b-[1px] mt-4 border-white" />

          {/* display information */}
          <div>
            <h1 className="text-center text-white font-bold text-xl m-2">
              Users
            </h1>
          </div>

          {/* white line */}
          <div className=" border-b-[1px] mt-4 border-white " />

          <div>
            <span className="text-white text-xs">Users :- {numberOfUsers}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
