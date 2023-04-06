import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCqbmjf3ci5jOZjP28eex_PW4m64PU5BJs",
    authDomain: "authenticator-7aced.firebaseapp.com",
    databaseURL: "https://authenticator-7aced-default-rtdb.firebaseio.com",
    projectId: "authenticator-7aced",
    storageBucket: "authenticator-7aced.appspot.com",
    messagingSenderId: "873748644705",
    appId: "1:873748644705:web:7bcccae980a32d9158bb20"
  };
    // Your web app's Firebase configuration
    // const firebaseConfig = {
    //   //yout config code
    // };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    
  
    const SignIn = document.getElementById('SignIn');
    SignIn.addEventListener('click',  (e) => {

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email, password,);

        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
          // Signed in 
           const user = userCredential.user;  
           alert('Signed in!');
           // ...
         })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            alert('invalid email or password');
            // ..
        });
       
      });

// const token = localStorage.getItem('user');

// if(token){
//         const SignedAcc = document.getElementById('SignedAcc');
//         SignedAcc.style.display = 'none';
//         const SignUp = document.getElementById('SingUpAcc');
//         SignUp.style.display = 'none';    
//         const Card = document.getElementById('personalInfo');
//         Card.style.display = 'block';
//         const uid = localStorage.getItem('uid');
//         get(ref(database, 'Users/' + uid)).then((snapshot) => {
//             if (snapshot.exists()) {
//                 const user = snapshot.val()
//                 console.log(user);

//         Card.innerHTML = `
//         <div class="card-body">
//                 <h5 class="card-title">${user.name} </h5>
//                 <h6 class="card-title">${user.email} </h6>
//                 <h6 class="card-title">${user.address} </h6>
//                 <h6 class="card-title">${user.phone} </h6>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         `
        
//             } else {
//                 console.log("No data available");
//             }
//         }).catch((error) => {
//             console.error(error);
//         });

//     }
//     else{
//         const SignedAcc = document.getElementById('SignedAcc');
//         SignedAcc.style.display = 'block';
//         const SignUp = document.getElementById('SingUpAcc');
         
//         const Card = document.getElementById('personalInfo');
//         Card.style.display = 'none';
//     }