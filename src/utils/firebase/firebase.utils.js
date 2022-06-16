import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

//initialize firebase
const firebaseApp = initializeApp(firebaseConfig);
//Returns the Authentication Object created by Firebase.
export const auth = new getAuth();

//Create the providers using the build in Firebase library

//-------Google Provider Sign in Class and Methods----------//
const googleProvider = new GoogleAuthProvider();
//Setting parameters given by Firebase for the google authentication procedure
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGooglePopUp = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

//--------------Creating a Authentication Using Email and Password
export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

//------- Signing Into The Application Using A Username and Password ---------//
export const signInEmailPassword = async(email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

//--------------Firebase Database CRUD Methods --------------------//
//Connects to the Firebase database
export const db = getFirestore();
//Creates a NoSQL document for the users"Table" that were authenticated. Using data from the authentication process
export const createUserDocumentFromAuth = async(
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    //Stores the reference to a doc using a document name "table" and a unique id to identify the document in the collection (database)
    const userDocRef = doc(db, "users", userAuth.uid);

    //Using async method to retrieve the document using the userDocRef from above.
    const userSnapShot = await getDoc(userDocRef);
    //If there is no document returned, store the display name and email from the userAuth object is used to create a document
    if (!userSnapShot.exists()) {
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
            console.log(`Error creating the user`, error.message);
        }
    }
    return userDocRef;
};