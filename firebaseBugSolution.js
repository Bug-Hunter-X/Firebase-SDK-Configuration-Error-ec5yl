// Correct implementation using error handling and proper configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

try {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully!');
} catch (error) {
  if (error.code === 'app/no-app') {
    console.error('Firebase app not initialized correctly. Check your configuration.', error);
  } else {
    console.error('An error occurred while initializing Firebase.', error);
  }
}
