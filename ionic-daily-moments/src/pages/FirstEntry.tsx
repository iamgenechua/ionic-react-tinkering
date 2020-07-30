import React, { useEffect, useState } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton} from '@ionic/react';
import { useParams } from 'react-router';
import {firestore} from '../Firebase';

interface RouteParams {
    id: string;
}

const FirstEntry: React.FC = () => {
    const {id} = useParams<RouteParams>();
    const [entry, setEntry] = useState<any>();
    useEffect(() => {
        const entryRef = firestore.collection('todos').doc(id);
        entryRef.get().then((doc) => {
            const entry = {id: doc.id, ...doc.data()};
            setEntry(entry);
        })
    }, [id]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{entry?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {entry?.description}
            </IonContent>
        </IonPage>
    );
};

export default FirstEntry;
