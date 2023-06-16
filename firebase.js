// Import the functions you need from the SDKs you need
import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGn1bWcoj-QPE4fa9pSYU6g1vM7y3ySJY',
  authDomain: 'gestion-test-uat.firebaseapp.com',
  projectId: 'gestion-test-uat',
  storageBucket: 'gestion-test-uat.appspot.com',
  messagingSenderId: '749882516781',
  appId: '1:749882516781:web:ec68788645dbce130c9fa4',
};

// Initialize Firebase
const initfirebase = app.initializeApp(firebaseConfig);

export default initfirebase;
