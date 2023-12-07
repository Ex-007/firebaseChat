

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_BrdVjXD1kBoFXxKpbtM97TpcNCyd-1A",
    authDomain: "chatapp-31d9a.firebaseapp.com",
    databaseURL: "https://chatapp-31d9a-default-rtdb.firebaseio.com",
    projectId: "chatapp-31d9a",
    storageBucket: "chatapp-31d9a.appspot.com",
    messagingSenderId: "33659136759",
    appId: "1:33659136759:web:086f498d5a9933576f81f2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


//   IMPORTING THE REQUIRED FUNCTIONS
  import {getDatabase, ref, set, onChildAdded, onChildRemoved, remove} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

  const db = getDatabase()
        

  var sender;

  if (localStorage.getItem("sender")) {
      sender = localStorage.getItem("sender");
  } else if (sessionStorage.getItem("sender")) {
      // If the name is found in sessionStorage, move it to localStorage
      sender = sessionStorage.getItem("sender");
      localStorage.setItem("sender", sender);
  } else {
      // If the name is not found in either localStorage or sessionStorage, prompt for it
      sender = prompt("Please Enter Your Preferred Name");
      localStorage.setItem("sender", sender);
  }

        let textArea = document.getElementById('textArea')
        let sendBtn = document.getElementById('Send')



//   SENDING MESSAGE TO THE FIREBASE DATABASE

    sendBtn.addEventListener('click', () => {
        let messageValue = textArea.value
        if(textArea.value == ''){
            return
        }else{
            let timestamp = new Date().getTime()
            set(ref(db, 'newMessage/' + timestamp), {
                message: messageValue,
                sender: sender
            })
        }
        textArea.value = ''
        console.log(messageValue)
    
    })

// RECEIVING REALTIME FEEDBACK FROM THE DATABASE

    let incoming = document.getElementById('incoming');

onChildAdded(ref(db, 'newMessage'), snapshot => {
    let deleteKey = snapshot.key;

    if (snapshot.val().sender == sender) {
        let deleteEdit = document.getElementById('deleteEdit')
        let deleteBtn = document.createElement('span');
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtn.innerHTML = '\u003A';

        let outgoingText = document.createElement('li');
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'newDiv')
        newDiv.setAttribute('id', deleteKey); 

        outgoingText.setAttribute('id', 'outgoingMessages');
        outgoingText.textContent = 'You : ' + snapshot.val().message;
        outgoingText.appendChild(deleteBtn);
        newDiv.appendChild(outgoingText);
        incoming.appendChild(newDiv);

        deleteBtn.addEventListener('click', () => {
            deleteEdit.style.display = 'flex'
            let deleteBtn = document.getElementById('deleteBtn')
            deleteBtn.addEventListener('click', () => {
                remove(ref(db, 'newMessage/' + deleteKey));
                deleteEdit.style.display = 'none'
            })
           let deleteRemove = setTimeout(() => {
                if(deleteEdit.style.display == 'flex'){
                    deleteEdit.style.display = 'none'
                }else{
                    clearTimeout(deleteRemove)
                }
           }, 5000);

        // SELECTING AND DELETING MULTIPLE
        //    window.addEventListener('click', () => {
        //     if(deleteEdit.style.display == 'flex'){
        //         deleteEdit.style.display = 'none'
        //     }else{
        //         deleteEdit.style.display = 'flex'
        //     }
        //    })
        });
    } else {
        let incomingText = document.createElement('li');
        incomingText.setAttribute('class', 'incomingMessages');
        incomingText.textContent = snapshot.val().sender + ' : ' + snapshot.val().message;
        incoming.appendChild(incomingText);
        incoming.scrollTop = incoming.scrollHeight;
    }
});

// UPDATING THE DOM AFTER A USER DELETES A MESSAGE
onChildRemoved(ref(db, 'newMessage'), (snapshot) => {
    
    let deleteKey = snapshot.key;
    let deletedDiv = document.getElementById(deleteKey);
    if (deletedDiv) {
        incoming.removeChild(deletedDiv);
    }
});

let starBtn = document.getElementById('starBtn')
let goBack = document.getElementById('goBack')
let profileImage = document.getElementById('profileImage')
let menuPop = document.getElementById('menuPop')
let chatOwner = document.getElementById('chatOwner')
starBtn.addEventListener('click', () => {
    console.log('star got clicked');
})



