

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

import {get, ref, getDatabase, child, } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



    const auth = getAuth()
    const db = getDatabase()
    const dbref = ref(db)



    function authenticatedUser() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userIdentification = user.uid;
                get(child(dbref, 'newUser/' + user.uid))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const profileImage = document.getElementById('profileImage');
                            const chatOwner = document.getElementById('chatOwner');
    
                            const username = snapshot.val().username;
                            localStorage.setItem('username', username);
    
                            chatOwner.textContent = username;
                            console.log(snapshot.val());
                        }
                    });
                console.log(userIdentification);
            }
        });
    }
    
    authenticatedUser();
    // function authenticaticatedUser(){
    //     onAuthStateChanged(auth, user => {
    //         if(user){
    //             let userIdendtification = user.uid
    //             get(child(dbref, 'newUser/' + user.uid))
    //             .then(snapshot => {
    //                 if(snapshot.exists()){
    //                     let profileImage = document.getElementById('profileImage')
    //                     let chatOwner = document.getElementById('chatOwner')

    //                     let username = snapshot.val().username
    //                     localStorage.setItem('username', username)

    //                     chatOwner.textContent = username
    //                 }
    //             })
    //             console.log(userIdendtification);
    //         }
    //     })
    // }
    

    // authenticaticatedUser()



































// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyD_BrdVjXD1kBoFXxKpbtM97TpcNCyd-1A",
//   authDomain: "chatapp-31d9a.firebaseapp.com",
//   databaseURL: "https://chatapp-31d9a-default-rtdb.firebaseio.com",
//   projectId: "chatapp-31d9a",
//   storageBucket: "chatapp-31d9a.appspot.com",
//   messagingSenderId: "33659136759",
//   appId: "1:33659136759:web:086f498d5a9933576f81f2"
// };

// const app = initializeApp(firebaseConfig);


// import {getDatabase, ref, set, onChildAdded, onChildRemoved, remove} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// const db = getDatabase()
      
// import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

//     const auth = getAuth()
//     function authenticaticatedUser(){
//         onAuthStateChanged(auth, user => {
//             if(user){
//                 let 
//                 console.log(user);
//             }
//         })
//     }



//     authenticaticatedUser()