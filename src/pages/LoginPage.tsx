import React from "react";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
  } from '@ionic/react';
import { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput,IonButton,IonText} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {login} from '../firebase';

const Login: React.FC = () => {
interface LoginData
{
    username:string;
  
}
const [username, setUsername] = useState<LoginData | null>(null);
return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonTitle>Login</IonTitle>
        </IonToolbar>
        <IonItem>
        <IonLabel>Username: </IonLabel>
        <IonInput
        type = "text"
        onIonChange= {(username:any) => setUsername(username.detail.value)} 
        name = "username" 
        placeholder="Enter username"></IonInput>
      </IonItem>
      <IonButton
        onClick = {(e) => {login(username)}}
      >Login/Signup</IonButton>
    </IonHeader>
    </IonPage>
);
};

export default Login;
