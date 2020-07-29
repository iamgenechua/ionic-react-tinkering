import React from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonList} from '@ionic/react';
import {entries} from '../data';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        {entries.map((entry) => 
          <IonItem 
            button 
            key={entry.id}
            routerLink={`/my/entries/${entry.id}`}>{entry.title}</IonItem>
        )}
      </IonList>
    </IonContent>
  </IonPage>
);

export default Home;
