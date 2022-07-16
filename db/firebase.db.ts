import { Firestore, getFirestore } from "firebase/firestore/lite";
import { app } from "./firebase.config";

declare global {
  var firebase: Firestore | undefined
}

export const firebase = global.firebase || getFirestore(app);
if (process.env.NODE_ENV !== 'production') global.firebase = firebase