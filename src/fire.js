import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBEfs-_baGq4WprD0Q8L2gsWjgAEkALQbk",
  authDomain: "fincalc-b540b.firebaseapp.com",
  databaseURL: "https://fincalc-b540b.firebaseio.com",
  projectId: "fincalc-b540b",
  storageBucket: "fincalc-b540b.appspot.com",
  messagingSenderId: "705734099426"
};
let fire = firebase.initializeApp(config);
export default fire;
