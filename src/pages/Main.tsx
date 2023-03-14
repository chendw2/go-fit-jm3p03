import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonList, useIonViewWillEnter } from '@ionic/react';
import './Main.css';
import { useState } from "react";
import { updateHistory } from '../firebase';
import Menu from '../components/Menu'

const Main: React.FC = () => {

  return (
    <>
      <Menu/>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='title'>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Something Something GoFit
        </IonContent>
      </IonPage>
    </>
    
  );
};

export default Main;