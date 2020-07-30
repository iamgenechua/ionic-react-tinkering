import React from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton} from '@ionic/react';
import {auth} from '../Firebase';

const Settings: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Settings</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      {/* Log out function using Firebase API */}
      <IonButton 
        color="medium" 
        expand="block"
        onClick={() => auth.signOut()}>Logout</IonButton>
    </IonContent>
  </IonPage>
);

export default Settings;
