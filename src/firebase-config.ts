import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDfERp5wz-qw6Ensf-xZauobxyj3_VCl0g",
    authDomain: "esame-finale-59f15.firebaseapp.com",
    projectId: "esame-finale-59f15",
    storageBucket: "esame-finale-59f15.appspot.com",
    messagingSenderId: "1064398060926",
    appId: "1:1064398060926:web:1c352f4abdcd48b7a0c72f",
    measurementId: "G-JHJH4H2DWR",
    databaseURL:
        "https://esame-finale-59f15-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export function prenotationData(
    name: string,
    mail: string,
    time: string,
    id: number
) {
    push(ref(database, "prenotation/"), {
        name: name,
        email: mail,
        time: time,
        eventID: id,
    });
}

export { app, database };
