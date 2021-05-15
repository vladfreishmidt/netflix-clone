import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBGQxnVAOoWZz0QXJCWuofMdF8fAsaFQqk',
  authDomain: 'netflix-77507.firebaseapp.com',
  projectId: 'netflix-77507',
  storageBucket: 'netflix-77507.appspot.com',
  messagingSenderId: '586422843103',
  appId: '1:586422843103:web:f9e53edd0ccbee5e015b6a',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
