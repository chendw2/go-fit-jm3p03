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
                    <IonButton fill='solid' color="light" routerLink='./Main'>Home Page</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='solid' color="light" routerLink='./Questionnaire'>Questionnaire</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='solid' color="light" routerLink='./Search'>Search Exercises</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='solid' color="light" routerLink='./Preferences'>Personal Info/Preferences</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='solid' color="light" routerLink='./History'>History</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle>
                    <IonButton fill='solid' color="light" routerLink='./LoginPage'>Log Out</IonButton>
                </IonMenuToggle>
            </IonRow>
        </IonGrid>
      </IonMenu>
    );
};

export default Menu;
