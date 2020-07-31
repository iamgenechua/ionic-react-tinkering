import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // import firestore module
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDunmNNUtdStzwNPtvnltM_QfUnmu8NDqE",
    authDomain: "memowrite-8b4c8.firebaseapp.com",
    databaseURL: "https://memowrite-8b4c8.firebaseio.com",
    projectId: "memowrite-8b4c8",
    storageBucket: "memowrite-8b4c8.appspot.com",
    messagingSenderId: "165317624900",
    appId: "1:165317624900:web:530516c9dfad0f72766811"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();
  export const firestore = app.firestore();
  export const storage = app.storage();