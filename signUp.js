import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = { /* سنضع الكود هنا لاحقاً */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signUpBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        alert("تم إنشاء الحساب بنجاح!");
        window.location.href = "login.html";
    } catch (e) {
        alert("خطأ في البيانات");
    }
};
