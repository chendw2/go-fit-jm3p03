import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow } from '@ionic/react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import {signOut} from '../firebase'

const Menu: React.FC = () => {
    const history = useHistory();
    return (
      <IonMenu contentId="main-content" menuId="menu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid class='ion-padding' fixed={true}>
            <IonRow>
                <IonMenuToggle menu="menu" autoHide={false}>
                    <IonButton fill='solid' color="light" routerLink='./Main'>Home Page</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle menu="menu" autoHide={false}>
                    <IonButton fill='solid' color="light" routerLink='./Questionnaire'>Questionnaire</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle menu="menu" autoHide={false}>
                    <IonButton fill='solid' color="light" routerLink='./Search'>Search Exercises</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle menu="menu" autoHide={false}>
                    <IonButton fill='solid' color="light" routerLink='./Workout'>Current Workout</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle menu="menu" autoHide={false}>
                    <IonButton fill='solid' color="light" routerLink='./History'>History</IonButton>
                </IonMenuToggle>
            </IonRow>
            <IonRow>
                <IonMenuToggle menu="menu" autoHide={false}>
                    <IonButton fill='solid' color="light" onClick={(e) => signOut(history)}>Log Out</IonButton>
                </IonMenuToggle>
            </IonRow>
        </IonGrid>
      </IonMenu>
    );
};

export default Menu;
