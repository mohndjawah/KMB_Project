import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// الـ Config الخاص بك (صحيح)
const firebaseConfig = {
  apiKey: "AIzaSyAHKkzsldPVlYyVzrSnD_0CSx6KjBP_Wzo",
  authDomain: "kmb-project-e8baa.firebaseapp.com",
  projectId: "kmb-project-e8baa",
  storageBucket: "kmb-project-e8baa.firebasestorage.app",
  messagingSenderId: "76861686082",
  appId: "1:76861686082:web:850319fa7fa82de56448db",
  measurementId: "G-56SWVHXXQY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ربط الزر بالوظيفة
document.getElementById('loginBtn').onclick = async function() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    try {
        // تنفيذ عملية الدخول
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        console.log("نجح الدخول:", userCredential.user);

        // التحويل المضمون
        // نصيحة: جرب تغييرها إلى "Home.html" أو "./Home.html" حسب اسم ملفك
        window.location.replace("Home.html"); 

    } catch (e) {
        console.error("خطأ Firebase:", e.code); // سيطبع لك نوع الخطأ في الـ Console
        errorElement.style.display = "block";
        
        // رسائل خطأ ذكية
        if (e.code === 'auth/invalid-credential') {
            errorElement.innerText = "⚠️ البريد أو كلمة المرور غير صحيحة.";
        } else {
            errorElement.innerText = "⚠️ حدث خطأ أثناء الاتصال، تأكد من الإنترنت.";
        }
    }
};
