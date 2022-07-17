import { Firestore, getFirestore } from "firebase/firestore/lite";
import { app } from "./firebase.config";

declare global {
  var firestore: Firestore | undefined
}

export const firestore = global.firestore || getFirestore(app);
if (process.env.NODE_ENV !== 'production') global.firestore = firestore