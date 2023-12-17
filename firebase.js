// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfERp5wz-qw6Ensf-xZauobxyj3_VCl0g",
    authDomain: "esame-finale-59f15.firebaseapp.com",
    projectId: "esame-finale-59f15",
    storageBucket: "esame-finale-59f15.appspot.com",
    messagingSenderId: "1064398060926",
    appId: "1:1064398060926:web:1c352f4abdcd48b7a0c72f",
    measurementId: "G-JHJH4H2DWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);