import { useState, useEffect } from 'react';

export default function useIsOnline() {

    const [isOffline,setIsOffline] = useState(false);

    useEffect(()=>{
        window.addEventListener("offline", (event) => {
        console.log('OFFFLINE')
        });

        window.addEventListener("onLine", (event) => {
            console.log('ON LINE !!')
            });
    },[]);


    return isOffline
}