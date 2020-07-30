import React from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton} from '@ionic/react';

interface RouteParams {
    id: string;
}

const AddEntryPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Add Entry</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                TODO
            </IonContent>
        </IonPage>
    );
};

export default AddEntryPage;
