import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonList } from '@ionic/react';
import Menu from '../components/Menu'
import { useState } from "react";
import {search} from '../firebase'

const Search: React.FC = () => {

  const [result, setResult] = useState(<IonList></IonList>)

  function p(input:String) {
    search(input, setResult)
  }
    return (
      <>
        <Menu/>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle className='title'>Exercise Search</IonTitle>
            </IonToolbar>
            <IonToolbar>
                <IonSearchbar placeholder='Search for an Exercise' onIonChange={(input:any) => p(input.detail.value)}></IonSearchbar>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {result}
          </IonContent>
        </IonPage>
      </>
      
    );
};

export default Search;