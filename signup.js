

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

  import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import {set, ref, getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  const auth = getAuth()
  const db = getDatabase()

let usernameIn = document.getElementById('username')
let FirstnameIn = document.getElementById('Firstname')
let LastnameIn = document.getElementById('Lastname')
let phoneNumberIn = document.getElementById('phoneNumber')
let EmailIn = document.getElementById('Email')
let PasswordIn = document.getElementById('Password')

let signUp = document.getElementById('signUp')


// function signUpNewUser(){
//   let firstNameInput = FirstnameIn.value
//   let lastNameInput = LastnameIn.value
//   let usernameInput = usernameIn.value
//   let email = EmailIn.value
//   var dateOfBirthInput = phoneNumberIn.value
//   let password = PasswordIn.value

//   createUserWithEmailAndPassword(auth, email, password)
//   .then(credentials => {
//       alert('User Created. Waiting for Redirect')
//       let userId = credentials.user.uid

//       SAVING THE USER CREDENTIALS TO FIREBASE
//       set(ref(db, 'newUser/' + userId), {
//           FirstName : firstNameInput,
//           LastName : lastNameInput,
//           Username : usernameInput,
//           Email : email,
//           Date_Of_Birth : dateOfBirthInput,
//       })
//       .then(response => {
//           console.log(response);
//       })
//       .catch(error => {
//           alert(error)
//           console.error(error);
//       })

//       REDIRECTING THE NEW USER TO THE PROFILE
//       setTimeout(() => {
//           window.location.href =  'chatPage.html'
//       }, 3000);

//       console.log(userId)
//       console.log(credentials);
//   })
//   .catch(error => {
//       alert(error)
//       console.error('The error is ' + error.message);
//   })
// }

// signUp.addEventListener('click', signUpNewUser)

// CHECK IF USER ALREADY EXISTS

// function checkPhoneExists(){

// }

import {get, child, query, orderByChild, equalTo} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
    const dbref = ref(db)


    // function searchNumber(){
    //   var phoneSearch = phoneNumberIn.value
    //     console.log(phoneSearch)
    //     const que = query(ref(db, 'newUser/'), orderByChild("phoneNumber"), equalTo(phoneSearch))
    //     get(que)
    //     .then(snapshot => {
    //         if(snapshot.exists()){
    //           alert('User Already exists. please change your number')
    //         }else{
    //             alert('User Not Found')
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    // }

    function signUpNewUser(){
      let firstNameInput = FirstnameIn.value
      let lastNameInput = LastnameIn.value
      let usernameInput = usernameIn.value
      let email = EmailIn.value
      var phoneNumber = phoneNumberIn.value
      let password = PasswordIn.value

      // CHECK IF PHONE NUMBER EXISTS ALREADY
      const que = query(ref(db, 'newUser/'), orderByChild("phoneNumber"), equalTo(phoneNumber))
      get(que)
      .then(snapshot => {
        if(snapshot.exists()){
          // IF PHONE NUMBER EXISTS, ALERT THE CLIENT
          alert('User Already exists. please change your number')
            // console.log(snapshot.val());
        }else{
          createUserWithEmailAndPassword(auth, email, password)
          .then(credentials => {
            alert('User Created. Waiting for Redirect')
            let userId = credentials.user.uid
      
            // SAVING THE USER CREDENTIALS TO FIREBASE
            set(ref(db, 'newUser/' + userId), {
                FirstName : firstNameInput,
                LastName : lastNameInput,
                Username : usernameInput,
                Email : email,
                phoneNumber : phoneNumber,
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                alert(error.message)
                console.error(error);
            })
      
            // REDIRECTING THE NEW USER TO THE PROFILE
            setTimeout(() => {
                window.location.href =  'chatPage.html'
            }, 3000);
      
            console.log(userId)
            // console.log(credentials);
         })
          .catch(error => {
              alert(error)
              console.error('The error is ' + error.message);
          })     
        }
      })
      .catch(error => {
          console.error(error);
      })


    }

    signUp.addEventListener('click', signUpNewUser)