import React from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage} from '@ionic/react';

const Settings: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Settings</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      Settings Page
    </IonContent>
  </IonPage>
);

export default Settings;
