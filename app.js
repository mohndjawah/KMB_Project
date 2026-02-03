import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  // ضع كودك الذي نسخته هنا يا درغام
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isLoginMode = true;

// التبديل بين التسجيل والدخول
window.toggleAuth = () => {
    isLoginMode = !isLoginMode;
    document.getElementById('auth-title').innerText = isLoginMode ? "تسجيل الدخول" : "إنشاء حساب";
    document.getElementById('mainBtn').innerText = isLoginMode ? "دخول" : "تسجيل";
    document.getElementById('toggleText').innerText = isLoginMode ? "ليس لديك حساب؟ حساب جديد" : "لديك حساب؟ سجل دخولك";
};

document.getElementById('mainBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    try {
        if (isLoginMode) {
            await signInWithEmailAndPassword(auth, email, pass);
        } else {
            await createUserWithEmailAndPassword(auth, email, pass);
        }
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('home-section').style.display = 'block';
    } catch (error) {
        errorMsg.style.display = 'block';
        errorMsg.innerText = "خطأ: كلمة المرور غير صحيحة أو الحساب غير موجود";
    }
};



const firebaseConfig = {
  apiKey: "AIzaSyAHKkzsldPVlYyVzrSnD_0CSx6KjBP_Wzo",
  authDomain: "kmb-project-e8baa.firebaseapp.com",
  projectId: "kmb-project-e8baa",
  storageBucket: "kmb-project-e8baa.firebasestorage.app",
  messagingSenderId: "76861686082",
  appId: "1:76861686082:web:acd987feef1dec9a6448db",
  measurementId: "G-ZVQNTY9GEK"
};
