import {initializeApp} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase , set , ref, get} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';
import { getStorage  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";
const firebaseConfig = {

  apiKey: "AIzaSyCqbmjf3ci5jOZjP28eex_PW4m64PU5BJs",
  authDomain: "authenticator-7aced.firebaseapp.com",
  databaseURL: "https://authenticator-7aced-default-rtdb.firebaseio.com",
  projectId: "authenticator-7aced",
  storageBucket: "authenticator-7aced.appspot.com",
  messagingSenderId: "873748644705",
  appId: "1:873748644705:web:7bcccae980a32d9158bb20"
};
    const app = initializeApp(firebaseConfig);
    const storage = getStorage();
    const database = getDatabase(app);
    const auth = getAuth(app);
    const token = localStorage.getItem('user');

if(token){
    const blogSubmit  = document.getElementById('createBlog');
    blogSubmit.addEventListener('click' , (e) => {
        // e.preventDefault();
        const blogName = document.getElementById('blogName').value;
        const blogContent = document.getElementById('blogDesc').value;
        const blogImg = document.getElementById('blogImg').value;

        // set image to firebase storage
        const storageRef = ref(storage, 'Blog/' + blogImg);
        const file = document.getElementById('blogImg').files[0];
        const task = uploadBytes(storageRef, file);
        task.then((snapshot) => {
            console.log('Uploaded a blob or file!');
            localStorage.setItem('blogImg' , snapshot);
        }
        )
        .catch((error) => {
            console.log(error);
        }
        )

        console.log(blogName , blogContent, blogImg);
      
        // random number generator
        const uid = Math.floor(Math.
        random() * 10
        );
  
        set(ref(database, 'Blog/' + uid ), {
            blogName: blogName,
            blogContent: blogContent,
        }) 
        .then(() => {
            alert('Data saved successfully!');
        }
        )
        .catch((error) => {
            alert('Data could not be saved.' + error);
        }
        )
    }
    )
}
else{
    window.reload();
    window.location.href = 'login.html';
}