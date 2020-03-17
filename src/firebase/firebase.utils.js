import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2GINeAvwnO39MCfzLBPoVpRPSql_IXMw",
  authDomain: "ecommerce-project-db-5a843.firebaseapp.com",
  databaseURL: "https://ecommerce-project-db-5a843.firebaseio.com",
  projectId: "ecommerce-project-db-5a843",
  storageBucket: "ecommerce-project-db-5a843.appspot.com",
  messagingSenderId: "484849919928",
  appId: "1:484849919928:web:ed507d037347c60978114d",
  measurementId: "G-HZNJDZDYJC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
