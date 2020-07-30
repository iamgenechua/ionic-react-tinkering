import React, { useState, useEffect } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonList} from '@ionic/react';
import {firestore} from '../Firebase';
import {Entry, toEntry} from '../models';
import { useAuth } from '../auth';


const Home: React.FC = () => {
  const {userId} = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    const todosRef = firestore
      .collection('users')
      .doc(userId)
      .collection('todos');
    todosRef.get().then((snapshot) => {
      const todos = snapshot.docs.map((doc) => toEntry(doc));
    setEntries(todos);
    });
  }, [userId]); // empty array means it will only run once when the component is mounted
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
            routerLink={`/my/entries/view/${entry.id}`}>{entry.title}</IonItem>
        )}
      </IonList>
    </IonContent>
  </IonPage>
  );
}

export default Home;
