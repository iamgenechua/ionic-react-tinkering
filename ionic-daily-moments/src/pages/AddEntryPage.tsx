import React, { useState } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonLabel, IonInput, IonTextarea, IonItem, IonButton} from '@ionic/react';
import {firestore} from '../Firebase';
import { useAuth } from '../auth';
import { useHistory } from 'react-router';

interface RouteParams {
    id: string;
}

const AddEntryPage: React.FC = () => {
	const {userId} = useAuth();
	const history = useHistory();
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	
	const handleSave = async () => {
		const todosRef = firestore.collection('users').doc(userId)
			.collection('todos');
		const todoData = {title, description};
		const todoRef = await todosRef.add(todoData);
		history.goBack(); // send user back to the previous page
	};

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
				<IonItem>
					<IonLabel position="stacked">Title</IonLabel>
					<IonInput 
						value={title}
						onIonChange={(event) => setTitle(event.detail.value)}/>
                </IonItem>
				<IonItem>
					<IonLabel position="stacked">Description</IonLabel>
					<IonTextarea 
						value={description}
						onIonChange={(event) => setDescription(event.detail.value)}/>
            	</IonItem>
				<IonButton expand="block" onClick={handleSave}>Save</IonButton>
			</IonContent>
        </IonPage>
    );
};

export default AddEntryPage;
