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


    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const blogID = urlParams.get('id');
    console.log(blogID);

    
    if(token) {
        const currentBlogElement = document.getElementById("currentBlog");
        get(ref(database, 'Blog/' + blogID))
        .then((snapshot)=> {
            if(snapshot.exists()){
                const data = snapshot.val();
                console.log(data);
                const blogName = data.blogName;
                const blogContent = data.blogContent;
                currentBlogElement.innerHTML += `
                <div class="currentblogcontainer">
                    <div class="blog_content_container">
                    <div class="blog_desc_container">
                        <div class="blog_nav">
                            <div class="icon">
                                <img src="./src/img/icons.svg">
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
                        </div>
                        
                    </div>
                    <div class="blog_img_container">
                        <img src="/src/img/blog_img.svg" alt="">
                    </div>
                </div>
            </div>
                `
            }
        })
    }

