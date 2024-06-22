# Real-Time Chat App with React and Firebase

This project demonstrates a real-time chat application built using React and Firebase. Users can authenticate with email and password, navigate between screens, and send/receive messages stored in Firestore.

## Getting Started

### Prerequisites:

Node.js and npm (or yarn) installed on your system.
Project Setup:

npm create vite@latest my-chat-app

choose react

cd my-chat-app  # Replace 'my-chat-app' with your desired project name

npm install

This command creates a new React project using Vite and installs the necessary dependencies.

### Firebase Configuration:

Create a Firebase project at https://firebase.google.com/ and follow the instructions to set up your app.

Create a .env file in your project root and add your Firebase configuration variables:

VITE_API_KEY=...
VITE_AUTH_DOMAIN=...
VITE_PROJECT_ID=...
VITE_STORAGE_BUCKET=...
VITE_MESSAGING_SENDER_ID=...
VITE_APP_ID=...
VITE_MEASUREMENT_ID=....

Important: Never commit your .env file to version control.

### Install Additional Dependencies:


npm install firebase react-router-dom
This installs the firebase and react-router-dom packages needed for Firebase integration and routing.

Run the App:

npm run dev
The app will start running in development mode, usually at http://localhost:5173/.

## Usage

Follow the instructions within the project code to implement user authentication, real-time messaging, and routing functionalities.
Refer to the official documentation for React, Firebase, and React Router DOM for further guidance.
Additional Resources

React: https://react.dev/
Firebase: https://firebase.google.com/
React Router DOM: https://blog.logrocket.com/react-router-v6-guide/
Firestore: https://firebase.google.com/docs/firestore