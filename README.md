# Real-Time Chat App with React and Firebase
(![Chat Image](https://drive.google.com/uc?id=1Jm5PBOx4gIy9S-GHirRobqd-NW4kliy_))

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



