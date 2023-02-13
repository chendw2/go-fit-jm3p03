import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow } from '@ionic/react';
import Menu from '../components/Menu'

const Search: React.FC = () => {
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
                <IonSearchbar placeholder='Search for an Exercise'></IonSearchbar>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            Something Something GoFit
          </IonContent>
        </IonPage>
      </>
      
    );
};

export default Search;