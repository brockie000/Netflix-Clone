import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCHU6f2dBNeNGutO4AAcPmKhH0RpCiG93Y",
    authDomain: "netflix-clone-43fa8.firebaseapp.com",
    projectId: "netflix-clone-43fa8",
    storageBucket: "netflix-clone-43fa8.appspot.com",
    messagingSenderId: "830309924962",
    appId: "1:830309924962:web:72038ac29f167710f7513b"
  };

  const firebaseApp = initializeApp(firebaseConfig);



  export {firebaseApp}