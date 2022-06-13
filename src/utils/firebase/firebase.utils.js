import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcWiN9HsRDISyfW_1dB30JhcYdmLjTxcw",
    authDomain: "crwn-clothing-db-4a3fa.firebaseapp.com",
    projectId: "crwn-clothing-db-4a3fa",
    storageBucket: "crwn-clothing-db-4a3fa.appspot.com",
    messagingSenderId: "981780045903",
    appId: "1:981780045903:web:bddae3bda4b1e196adca3a",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = new getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log(`Error creating the user`, error.message);
        }
    }
    return userDocRef;
};