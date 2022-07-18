import { collection, getDocs, addDoc,doc, query, where, getDoc } from 'firebase/firestore/lite';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {firestore} from '../db/firebase.db';
import { useEffect } from 'react';
import useIsOnline from '../components/_hooks/online.hook';
import DefaultLayout from '../components/_layouts/DefaultLayout/DefaultLayout';

export default function Home() {
  const isOnline = useIsOnline();
  async function testFire(){
    const citiesCol = collection(firestore, 'price');

    const q =  query(citiesCol, where("subDoc.name", "==", "wol"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  useEffect(()=>{
    testFire()
  },[])


  return <DefaultLayout>
    <p>dsd</p>
  </DefaultLayout>
}
