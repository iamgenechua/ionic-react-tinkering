import React, { useState, useEffect, useRef } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonLabel, IonInput, IonTextarea, IonItem, IonButton, IonDatetime} from '@ionic/react';
import {firestore} from '../Firebase';
import { useAuth } from '../auth';
import { useHistory } from 'react-router';

interface RouteParams {
    id: string;
}

const AddEntryPage: React.FC = () => {
	const {userId} = useAuth();
	const history = useHistory();
	const [date, setDate] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [pictureUrl, setPictureUrl] = useState('/assets/placeholder.jpg')
	
	useEffect(() => {
		return () => {
			if (pictureUrl.startsWith('blob:')) {
				URL.revokeObjectURL(pictureUrl); // remove the prev picture when you upload a new picture
			}
		}
	}, [pictureUrl]);

	const handleSave = async () => {
		const todosRef = firestore.collection('users').doc(userId)
			.collection('todos');
		const todoData = {date, title, description};
		await todosRef.add(todoData);
		history.goBack(); // send user back to the previous page
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files.length > 0) {
			const file = event.target.files.item(0);
			const pictureUrl = URL.createObjectURL(file);
			setPictureUrl(pictureUrl);
		}
	}

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
					<IonLabel position="stacked">Date</IonLabel>
					<IonDatetime
						value={date}
						onIonChange={(event) => setDate(event.detail.value)}/>
                </IonItem>
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
				<IonItem>
					<IonLabel position="stacked">Picture</IonLabel>
					<br></br>
					<input type="file" accept="image/*" onChange={handleFileChange}/>
					<img 
						alt="add here" 
						src ={pictureUrl} />
                </IonItem>
				<IonButton expand="block" onClick={handleSave}>Save</IonButton>
			</IonContent>
        </IonPage>
    );
};

export default AddEntryPage;
