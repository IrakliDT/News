import {initializeApp} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase , set , ref, get} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

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
    const database = getDatabase(app);
    const auth = getAuth(app);
    const token = localStorage.getItem('user');

if(token){
    const blogDetails = document.getElementById('blogPost');
    get(ref(database, 'Blog/')).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            for (let key in data) {
                const blogName = data[key].blogName;
                const blogContent = data[key].blogContent;
                blogDetails.innerHTML += `
                <div class="blog_content_container">
                <div class="blog_desc_container">
                    <div class="blog_nav">
                        <div class="icon">
                            <img src="/src/img/icon.svg">
                        </div>
                        <div class="date">
                            <span>12-04-2022</span>
                        </div>
                    </div>
                    <div class="blog-content">
                        <h1>
                        ${blogName}
                        </h1>
                        <p>
                        ${blogContent}
                        </p>
                        <span>
                            Read more ...
                        </span>
                    </div>
                    
                </div>
                <div class="blog_img_container">
                    <img src="/src/img/blog_img.svg" alt="">
                </div>
            </div>
                `;
            }
        } else {
            console.log("No data available");
        }
    }
    ).catch((error) => {
        console.error(error);
    }
    );
}

// burger menu


var active = document.getElementById("burger");

active.addEventListener("click", function() {
  
  this.classList.toggle("active");
  
  var menuShow = document.getElementById("menu");
  
  menuShow.classList.toggle("show");
});