import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBawXkrsGSIOw3du4N-U38ErwWKUNtbP58",
	authDomain: "e-library-7fe52.firebaseapp.com",
	projectId: "e-library-7fe52",
	storageBucket: "e-library-7fe52.appspot.com",
	messagingSenderId: "278044431374",
	appId: "1:278044431374:web:5fabfb67c57f6a2df8585f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
