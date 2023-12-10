


    let chatOwner = document.getElementById('chatOwner')
        // Function to extract parameters from the URL
        function getParameterByName(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
        
    
        // Extract parameters
        const chatWindowId = getParameterByName('chatWindowId');
        const phoneNumber = getParameterByName('phoneNumber');
        const username = getParameterByName('username');
        chatOwner.textContent = username  
        // Use the extracted parameters to initialize the chat
        console.log('Chat Window ID:', chatWindowId);
        console.log('Phone Number:', phoneNumber);
        console.log('Username:', username);

        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyV7x22bMvPXXpIrUCs3hVGuu9JPS9HhU",
  authDomain: "testproject1-81eb2.firebaseapp.com",
  databaseURL: "https://testproject1-81eb2-default-rtdb.firebaseio.com",
  projectId: "testproject1-81eb2",
  storageBucket: "testproject1-81eb2.appspot.com",
  messagingSenderId: "845846337324",
  appId: "1:845846337324:web:63c71ced470c9d3ad1be89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);