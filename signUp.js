import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHKkzsldPVlYyVzrSnD_0CSx6KjBP_Wzo",
  authDomain: "kmb-project-e8baa.firebaseapp.com",
  projectId: "kmb-project-e8baa",
  storageBucket: "kmb-project-e8baa.firebasestorage.app",
  messagingSenderId: "76861686082",
  appId: "1:76861686082:web:2ff4c4b6e86212b66448db",
  measurementId: "G-MJZH7VYLK9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signUpBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        // ظهور رسالة النجاح
        alert("🎉 مبروك ! تم إنشاء حسابك بنجاح في قاعدة بيانات NoSQL.");
        
        // التحويل فوراً لصفحة تسجيل الدخول بعد الضغط على OK
        window.location.href = "index.html"; 
    } catch (e) {
        alert("خطأ: تأكد من كتابة البريد بشكل صحيح وكلمة مرور قوية");
    }
};
