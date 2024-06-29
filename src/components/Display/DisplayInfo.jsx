import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

function DisplayInfo() {
  const [data, setData] = useState([]);
  const [numberOfUsers,setNumberOfUsers]=useState(0)


  const deleteUser=async(name)=>{
    try {
        const docref=doc(db,"Users",name)
        await deleteDoc(docref); 
        alert("user deleted",name)
        fetchData();
    } catch (error) {
        console.log(error)
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      const docsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData([...docsData]);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center text-white font-bold text-xl m-2">Users</h1>

      {data.map((item, index) => (
        <div key={index} className="bg-slate-950 rounded-sm flex text-white justify-between box-border mb-2">
          <div className="flex flex-col p-2">
            <span className="text-sm">Name :- {item.Name}</span>
            <span className="text-sm">Age :- {item.Age}</span>
            <span className="text-sm">Email :- {item.Email}</span>
          </div>
          <button className="w-10 border-l-2 border-slate-900 hover:bg-red-700 ease-in-out duration-300"
          onClick={()=>deleteUser(item.Name)}

          >X</button>
        </div>
        
      ))}
    </div>
  );
}

export default DisplayInfo;
