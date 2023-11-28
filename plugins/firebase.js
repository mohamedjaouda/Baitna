import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyBbbSs9WUqvKqkmZMbWNnNkHnrxAp4ootc",
    authDomain: "baitna-dbedb.firebaseapp.com",
    projectId: "baitna-dbedb",
    storageBucket: "baitna-dbedb.appspot.com",
    messagingSenderId: "484133197889",
    appId: "1:484133197889:web:311372eac4a3e165ed0ec0",
    measurementId: "G-C1TEE0QG8S",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
