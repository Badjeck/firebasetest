import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD-q-Vu0UQ32E0UpHBWirFan10mkYItrnY",
    authDomain: "lucyan-b7589.firebaseapp.com",
    databaseURL: "https://lucyan-b7589.firebaseio.com",
    projectId: "lucyan-b7589",
    storageBucket: "lucyan-b7589.appspot.com",
    messagingSenderId: "797431556799"
}

firebase.initializeApp(firebaseConfig);

export default firebase;