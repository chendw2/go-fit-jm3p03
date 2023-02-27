// Import the functions you need from the SDKs you need
import { Redirect, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {Router, useHistory} from "react-router";
import {useEffect, useState,useContext} from "react";
import { collection, addDoc, getDocs, doc, getDoc,setDoc, collectionGroup, query, where, startAt, orderBy, endAt, limit} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import {IonList, IonButton, IonCard, IonCardHeader, IonGrid, IonRow, IonCol} from '@ionic/react'
import "./firebase.css";


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


const registerUser = async(email:any,password:any, history:any) => 
{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  const user = userCredential.user;
  history.push("/Questionnaire");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

}

const login = async(email:any,password:any, history:any) => 
{
  try{
    await signInWithEmailAndPassword(auth,email,password);
    history.push("/Main");
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

const signOut = async(history:any) => 
{
  auth.signOut()
  .then(()=>{
    history.push("/LoginPage");
  })
  .catch((error) => {
    alert(error.message);
  })
}

const search = async(input:String, result:any) =>
{
  if (input != ""){
    const q = query(collection(db, "Exercises"), orderBy("name"), startAt(input), endAt(input+"\uf8ff"), limit(15));
    const querySnapshot = await getDocs(q);

    //querySnapshot.forEach((doc) => {
      //console.log(doc.id, "=>", doc.data());
    //});
    
    result(<IonList className="ion-padding">{querySnapshot.docs.map((doc) => (
      <IonCard>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCardHeader className="card-header">{doc.data().name}</IonCardHeader>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRow className="card-text">Main Body Part: {doc.data().bodyPart}</IonRow>
              <IonRow className="card-text">Required Equipment: {doc.data().equipment}</IonRow>
              <IonRow className="card-text">Targeted Muscle: {doc.data().target}</IonRow>
            </IonCol>
            <IonCol className="exercise-gif" size="auto">
              <img alt="Silhouette of mountains" src={doc.data().gifUrl} width={125} height={125}></img>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="auto">
              <IonButton>Add Exercise</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    ))}

    </IonList>)
  }
}


const equipmentSearch = async(input:String, result:any) =>
{
  if (input != ""){



    
  }
}


export {login,registerUser,auth, addQuestionnaireInfo, equipmentSearch, signOut, search};