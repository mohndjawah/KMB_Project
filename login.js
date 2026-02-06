import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = { /* سنضع الكود هنا لاحقاً */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    try {
        await signInWithEmailAndPassword(auth, email, pass);
        window.location.href = "Home.html";
    } catch (e) {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerText = "خطأ في البريد أو كلمة المرور";
    }
};
