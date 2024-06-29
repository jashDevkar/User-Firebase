
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCp-HN5YQGTO9aSNjaso5ZgDTavrJt9liE",
  authDomain: "user-info-73e35.firebaseapp.com",
  projectId: "user-info-73e35",
  storageBucket: "user-info-73e35.appspot.com",
  messagingSenderId: "1030866448969",
  appId: "1:1030866448969:web:03d23de01f810eb1bec598"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};