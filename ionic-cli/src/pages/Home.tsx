import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

interface Money {
  currency: string;
  amount: number;
}

function formatMoney(money: Money): string {
  return money.amount.toFixed(2) + money.currency;
}

const Home: React.FC = () => {
  const balance = {currency: 'RM', amount: 123};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Your balance is {formatMoney(balance)}
      </IonContent>
    </IonPage>
  );
};

export default Home;
