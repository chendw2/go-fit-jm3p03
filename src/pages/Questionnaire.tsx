import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonSelect, IonButton, IonButtons, IonList, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonItem, IonLabel, IonCard, IonSelectOption, IonCardHeader, IonCardTitle} from '@ionic/react';
import Menu from '../components/Menu'
import {addQuestionnaireInfo} from '../firebase';
import { useState } from 'react';
import "../equipment.json"

interface Data
{
    data:string;
  
}



const Questionnaire: React.FC = () => {
  const [name, setName] = useState<Data| null>(null)
  const [age, setAge] = useState<Data | null>(null)
  const [height, setHeight] = useState<Data | null>(null)
  const [weight, setWeight] = useState<Data | null>(null)

  const [result, setResult] = useState(<IonList></IonList>)

    return (
      <>
        <Menu/>
        <IonPage id="main-content">

          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle className='title'>User Questionnaire</IonTitle>
            </IonToolbar>
          </IonHeader>

        
          <IonContent>
            <IonCard>
                <IonItem>
                    <IonLabel color="black" >Name: </IonLabel>
                        <IonInput name = "Name" type = "text" placeholder="What is your Name?"
                        onIonChange= {(username:any) => setName(username.detail.value)} >
                        </IonInput>
                </IonItem>
              </IonCard>
              <IonCard>
                <IonItem>
                    <IonLabel color="black" >Age: </IonLabel>
                        <IonInput name = "age" type = "text" placeholder="What is your age?"
                        onIonChange= {(age:any) => setAge(age.detail.value)} >
                        </IonInput>
                </IonItem>
                </IonCard>
                <IonCard>
                <IonItem>
                    <IonLabel color="black" >Weight: </IonLabel>
                        <IonInput name = "weight" type = "text" placeholder="What is your weight?"
                        onIonChange= {(weight:any) => setWeight(weight.detail.value)} >

                        </IonInput>
                </IonItem>
                </IonCard>
                <IonCard>
                <IonItem>
                    <IonLabel color="black" >Height: </IonLabel>
                        <IonInput name = "height" type = "text" placeholder="What is your Height?"
                        onIonChange= {(height:any) => setHeight(height.detail.value)} >
                        </IonInput>
                </IonItem>
                </IonCard>


        <IonCard>
          <IonList>
            <IonItem>
              <IonSelect placeholder="Please select which equipment you have" multiple={true}>
                <IonSelectOption value="assisted">assisted</IonSelectOption>
                <IonSelectOption value="band">band</IonSelectOption>
                <IonSelectOption value="barbel">barbel</IonSelectOption>
                <IonSelectOption value="body weight">body weight</IonSelectOption>
                <IonSelectOption value="bosu ball">bosu ball</IonSelectOption>
                <IonSelectOption value="cable">cable</IonSelectOption>
                <IonSelectOption value="elliptical machine">elliptical machine</IonSelectOption>
                <IonSelectOption value="ez barbell">ez barbell</IonSelectOption>
                <IonSelectOption value="hammer">hammer</IonSelectOption>
                <IonSelectOption value="kettlebell">kettlebell</IonSelectOption>
                <IonSelectOption value="leverage machine">leverage machine</IonSelectOption>
                <IonSelectOption value="medicine ball">medicine ball</IonSelectOption>
                <IonSelectOption value="olympic barbell">olympic barbell</IonSelectOption>
                <IonSelectOption value="resistance band">resistance band</IonSelectOption>
                <IonSelectOption value="roller">roller</IonSelectOption>
                <IonSelectOption value="rope">rope</IonSelectOption>
                <IonSelectOption value="skierg machine">skierg machine</IonSelectOption>
                <IonSelectOption value="sled machine">sled machine</IonSelectOption>
                <IonSelectOption value="smith machine">smith machine</IonSelectOption>
                <IonSelectOption value="stability ball">stability ball</IonSelectOption>
                <IonSelectOption value="stepmill machine">stepmill machine</IonSelectOption>
                <IonSelectOption value="tire">tire</IonSelectOption>
                <IonSelectOption value="trap bar">trap bar</IonSelectOption>
                <IonSelectOption value="upper body ergometer">upper body ergometer</IonSelectOption>
                <IonSelectOption value="weighted">weighted</IonSelectOption>
                <IonSelectOption value="wheel roller">wheel roller</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </IonCard>

        <IonButton routerLink = "/Main"
                onClick = {(e) => {addQuestionnaireInfo(name,age,height,weight)}}>Submit
        </IonButton>

        </IonContent>



        </IonPage>
      </>




    );
};

export default Questionnaire;