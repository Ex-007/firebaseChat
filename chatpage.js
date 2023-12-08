


let middleDetails = document.getElementById('middleDetails')
middleDetails.addEventListener('click', () => {
    window.location.href = 'chatWindow.html'
})

let searchBar = document.getElementById('searchBar')
let profileImage = document.getElementById('profileImage')
let searchBtn = document.getElementById('searchBtn')
let chatOwner = document.getElementById('chatOwner')






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

import {get, ref, getDatabase, child, query, orderByChild, equalTo} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import {} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"; 


    const auth = getAuth()
    const db = getDatabase()
    const dbref = ref(db)


    function searchNumber(){
        let phoneSearch = searchBar.value
        console.log(phoneSearch)
        const que = query(ref(db, 'newUser/'), orderByChild("phoneNumber"), equalTo(phoneSearch))
        get(que)
        .then(snapshot => {
            if(snapshot.exists()){
                console.log(snapshot.val());
            }else{
                alert('User Not Found')
            }
        })
        .catch(error => {
            console.error(error);
        })
    }



    function authenticatedUser() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userIdentification = user.uid;
                get(child(dbref, 'newUser/' + user.uid))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const profileImage = document.getElementById('profileImage');
                            const chatOwner = document.getElementById('chatOwner');
                            
                            const phoneNumber = snapshot.val().phoneNumber;
                            const username = snapshot.val().Username;
                            // localStorage.setItem('username', username);
    
                            chatOwner.textContent = username;
                            console.log(snapshot.val());
                            console.log(phoneNumber);
                        }
                    });
                console.log(userIdentification);
            }
        });
    }





    authenticatedUser()








searchBtn.addEventListener('click', searchNumber)














