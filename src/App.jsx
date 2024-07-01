import { useEffect, useState } from "react";
import Breaker from "./components/Breaker/Breaker";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import {db} from './components/firebase/firebaseConfig';

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("Enter name");
  const [userAge, setUserAge] = useState("Enter Age");
  const [userEmail, setUserEmail] = useState("Enter Email");

  const addValueToFirebase = async(e) => {
    e.preventDefault()
    if (userAge < 100 && userAge > 0 && userName != "") {
      try {

        const docref= doc(db,"Users",userName);
        await setDoc(docref,{
          Name:userName,
          Age:userAge,
          Email:userEmail
        })
        alert("data added to ",userName);
        setUserAge("");
        setUserEmail("");
        setUserName("");
        fetchData();
        
      } catch (error) {
        console.log(error);
      }
      
    } else {
      alert("invalid information");
    }
  };

  const deleteUser = async (name) => {
    try {
      const docref = doc(db, "Users", name);
      await deleteDoc(docref);
      alert("user deleted", name);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    const docsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData([...docsData]);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-black justify-center  flex">
        {/* container */}
        <div className="lg:w-fit w-full h-fit bg-slate-700 p-4 rounded-sm lg:mt-12 m-7 md:m-10 ">

          {/* input fields */}
          <div>
            <form
              className="grid lg:grid-cols-7 grid-cols-1 lg:gap-2 gap-3"
              onSubmit={addValueToFirebase}
            >
              <input
                className="lg:col-span-2 col-span-1 h-fit rounded-sm p-[2px] outline-none"
                placeholder={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                required
              />
              <input
                className="lg:col-span-2 col-span-1 h-fit rounded-sm p-[2px] outline-none"
                placeholder={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                type="number"
                required
              />
              <input
                className="lg:col-span-2 col-span-1 h-fit rounded-sm p-[2px] outline-none"
                placeholder={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                required
              />
              <button
                className="lg:col-span-1 col-span-1 bg-slate-950 text-white rounded-[3px] hover:bg-slate-900 ease-in-out duration-300"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>

          {/* white line */}
          <Breaker />

          {/* display information */}
          <div>
            <h1 className="text-center text-white font-bold text-xl m-2">
              Users
            </h1>

            {data.map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 rounded-sm flex text-white justify-between box-border mb-2"
              >
                <div className="flex flex-col p-2">
                  <span className="text-sm">Name :- {item.Name}</span>
                  <span className="text-sm">Age :- {item.Age}</span>
                  <span className="text-sm">Email :- {item.Email}</span>
                </div>
                <button
                  className="w-10 border-l-2 border-slate-900 hover:bg-red-700 ease-in-out duration-300"
                  onClick={() => deleteUser(item.Name)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* white line */}
          <Breaker />

          <div>
            <span className="text-white text-xs">Users :- {data.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
