import React, { useState, useEffect } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonList} from '@ionic/react';
import {firestore} from '../Firebase';

const Home: React.FC = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const todosRef = firestore.collection('todos');
    todosRef.get().then((snapshot) => {
      const todos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
    setEntries(todos);
    });
  }, []); // empty array means it will only run once when the component is mounted
  return (
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
}

export default Home;
