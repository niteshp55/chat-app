import App from './App.svelte';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = new App({
	target: document.body,
});

const firebaseConfig = {
	apiKey: "AIzaSyDR7SeUTBup5Ocl4tTIOlIVitLSPEMK4iE",
	authDomain: "chat-app-7a9c4.firebaseapp.com",
	projectId: "chat-app-7a9c4",
	storageBucket: "chat-app-7a9c4.appspot.com",
	messagingSenderId: "667290914481",
	appId: "1:667290914481:web:0063e907e9d3a25d4e1c90",
	measurementId: "G-CL7PLV8PD5"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;