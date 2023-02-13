import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow } from '@ionic/react';

const Menu: React.FC = () => {
    return (
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid class='ion-padding' fixed={true}>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='clear' routerLink='./Main'>Home Page</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='clear' routerLink='./Search'>Search Exercises</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='clear' routerLink='./Preferences'>Personal Info/Preferences</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='clear' routerLink='./History'>History</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='clear' routerLink='./LoginPage'>Log Out</IonButton>
                </IonMenuToggle>
            </IonRow>
        </IonGrid>
      </IonMenu>
    );
};

export default Menu;
