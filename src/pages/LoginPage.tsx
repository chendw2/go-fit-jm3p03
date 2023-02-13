import React from "react";
import './LoginPage.css';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonFooter,
    IonGrid,
    IonRow,
    IonCol,
    setupIonicReact
  } from '@ionic/react';
import { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput,IonButton,IonText} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {login} from '../firebase';
import { title } from "process";

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
          <IonTitle className='header'>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1 className='header'>Welcome to GoFit</h1>

        <IonItem>
          <IonInput className="username"
            type = "text"
            onIonChange= {(username:any) => setUsername(username.detail.value)} 
            name = "username" 
            placeholder="Enter username">
          </IonInput>
        </IonItem>

        <IonGrid fixed={true}>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton routerLink="/Main"
                onClick = {(e) => {login(username)}}
                >Login/Signup</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter>
      </IonFooter>

    </IonPage>
);
};

export default Login;
