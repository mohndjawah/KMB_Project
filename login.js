import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHKkzsldPVlYyVzrSnD_0CSx6KjBP_Wzo",
  authDomain: "kmb-project-e8baa.firebaseapp.com",
  projectId: "kmb-project-e8baa",
  storageBucket: "kmb-project-e8baa.firebasestorage.app",
  messagingSenderId: "76861686082",
  appId: "1:76861686082:web:850319fa7fa82de56448db",
  measurementId: "G-56SWVHXXQY"
};

console.log("1. تم بدء تشغيل ملف الـ JS"); // للتأكد أن الملف يعمل

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
    console.log("2. الزر موجود في الصفحة وتم العثور عليه");
    
    loginBtn.onclick = async function() {
        console.log("3. تم الضغط على الزر، جاري محاولة الدخول...");
        
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const errorElement = document.getElementById('error');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pass);
            console.log("4. نجح Firebase في التحقق من المستخدم!");
            
            // محاولة التحويل بأكثر من طريقة لضمان العمل
            console.log("5. جاري التحويل لصفحة Home.html...");
            window.location.assign("Home.html");

        } catch (e) {
            console.error("خطأ من Firebase:", e.code);
            errorElement.style.display = "block";
            errorElement.innerText = "خطأ: " + e.message;
        }
    };
} else {
    console.error("خطأ: لم يتم العثور على زر باسم loginBtn في صفحة الـ HTML!");
}
