import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_gosIHnBjF7sfszky1aVj0TOYZhYLog4",
  authDomain: "form-tormm.firebaseapp.com",
  projectId: "form-tormm",
  storageBucket: "form-tormm.appspot.com",
  messagingSenderId: "521371389239",
  appId: "1:521371389239:web:f45b2c187fb117943f9eb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
