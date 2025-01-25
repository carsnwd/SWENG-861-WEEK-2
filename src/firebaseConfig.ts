import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB0KjLBNBDmTtoEx8iHKo541oAXNoTpCSE",
    authDomain: "sweng-862-week-2.firebaseapp.com",
    projectId: "sweng-862-week-2",
    storageBucket: "sweng-862-week-2.firebasestorage.app",
    messagingSenderId: "1062237184134",
    appId: "1:1062237184134:web:ccda9430311538f84d3107"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();