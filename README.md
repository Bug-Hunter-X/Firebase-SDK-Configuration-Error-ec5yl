# Firebase SDK Configuration Error

This repository demonstrates a common error encountered when using the Firebase JavaScript SDK:  incorrect configuration. The error occurs when the `firebase.initializeApp()` function receives an invalid configuration object. This often stems from typos in the configuration file, omitted fields, or incorrect data types.  The solution showcases how to properly configure your Firebase app and handle potential errors gracefully.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install the required Firebase SDK.
3. Run `node firebaseBug.js`. Observe the error.
4. Examine `firebaseBugSolution.js` for the corrected implementation.

## Solutions

* **Verify configuration values:** Double-check your `firebaseConfig.json` ensuring all keys (`apiKey`, `authDomain`, `projectId`, etc.) are correct and values are valid.
* **Check for typos:**  Carefully review your code for any spelling mistakes in Firebase configuration parameters.
* **Error Handling:** Implement robust error handling to catch and address configuration issues gracefully. 
