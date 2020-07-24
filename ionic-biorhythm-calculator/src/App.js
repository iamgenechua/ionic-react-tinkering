import {IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonDatetime} from '@ionic/react'
import React, {useState} from 'react';
import './App.css';
import BiorhythmCard from './components/BiorhythmCard';


// Hooks
function useLocalStorage(key, defaultValue) {
  const getinitialValue = () => localStorage.getItem(key) || defaultValue;
  const[value, setValue] = useState(getinitialValue);
  const setAndStoreValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  }
  return [value, setAndStoreValue];
}

function App() {
  const[birthDate, setBirthDate] = useLocalStorage('birthDate', '')
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Biorhythms</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonLabel position="fixed">D-O-B:</IonLabel>
            <IonDatetime 
              displayFormat="D MMMM YYYY"
              onIonChange={(event) => setBirthDate(event.detail.value)}
              />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Target Date:</IonLabel>
            <IonDatetime
              displayFormat="D MMMM YYYY"
              onIonChange={(event) => setTargetDate(event.detail.value)}></IonDatetime>
          </IonItem>
          {
            birthDate && 
            <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
          }
        </IonContent>
      </IonApp>
    );
}

export default App;
