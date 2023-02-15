// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {Router, useHistory} from "react-router";
import {useEffect, useState,useContext} from "react";
import { collection, addDoc, getDocs, doc, getDoc,setDoc} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFopyvUlVx8D08lwrlO2P-QrDqhZNydik",
  authDomain: "go-fit-82bb9.firebaseapp.com",
  projectId: "go-fit-82bb9",
  storageBucket: "go-fit-82bb9.appspot.com",
  messagingSenderId: "339580888987",
  appId: "1:339580888987:web:32da4a9b074ce300d4a33e",
  measurementId: "G-WGT05KEB7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app);


const registerUser = async(email:any,password:any) => 
{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

const login = async(email:any,password:any) => 
{
  try{
    await signInWithEmailAndPassword(auth,email,password);
  }
  catch(err:any){
    console.error(err);
    alert(err.message);
  }
}

const addQuestionnaireInfo = async(name:any,age:any,weight:any,height:any) =>
{
  try{
    const username = auth.currentUser?.email;
    if (username)
    {
      const data = 
      {
        name:name,
        age:age,
        weight:weight,
        height:height,
      }
      await setDoc(doc(db,"Users",username),data);
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }



}


export {login,registerUser,auth,addQuestionnaireInfo};