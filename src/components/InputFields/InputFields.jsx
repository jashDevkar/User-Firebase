import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

function InputFields() {

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
        alert("data added to ",name);
        setUserAge("");
        setUserEmail("");
        setUserName("");
        
      } catch (error) {
        console.log(error);
      }
      
    } else {
      alert("invalid information");
    }
  };
  return (
    <div>
      <form className="grid lg:grid-cols-7 grid-cols-1 lg:gap-2 gap-3" onSubmit={addValueToFirebase}>
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
  );
}

export default InputFields;
