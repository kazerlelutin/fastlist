import { Firestore, getFirestore } from "firebase/firestore/lite";
import { app } from "./firebase.config";

declare global {
  var firestore: Firestore | undefined
}

export const firestore = global.firestore || getFirestore(app);
if (process.env.NODE_ENV !== 'production') global.firestore = firestore

/**
 * 
 *    const citiesCol = collection(firestore, 'price');

    const q =  query(citiesCol, where("subDoc.name", "==", "wol"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
 */