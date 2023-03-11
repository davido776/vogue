import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from 'firebase/auth';


import { getFirestore, 
   doc, 
   getDoc, 
   setDoc,
   collection, 
   writeBatch,
   query,
  getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbiLuMfH3dnK_naC7IMZF7XLQ2TODJWyg",
    authDomain: "invogue-db.firebaseapp.com",
    projectId: "invogue-db",
    storageBucket: "invogue-db.appspot.com",
    messagingSenderId: "86343820787",
    appId: "1:86343820787:web:7aaa8579a4ab4bc906de86"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  
    return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth)
}

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);


export const addCollectionAndDocument = async (collectionKey,objectsToAdd) => {
   const collectionRef = collection(db,collectionKey)
   const batch = writeBatch(db)
   console.log(objectsToAdd)
   objectsToAdd.forEach((object) => {
     var objectRef = doc(collectionRef,object.title.toLowerCase())
     batch.set(objectRef,object)
   });
  
   await batch.commit();
   console.log("done")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};