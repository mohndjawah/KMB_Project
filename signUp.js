import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = { 
    // الصق كود الـ Config الخاص بك هنا يا درغام
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signUpBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        // ظهور رسالة النجاح
        alert("🎉 مبروك يا درغام! تم إنشاء حسابك بنجاح في قاعدة بيانات NoSQL.");
        
        // التحويل فوراً لصفحة تسجيل الدخول بعد الضغط على OK
        window.location.href = "login.html"; 
    } catch (e) {
        alert("خطأ: تأكد من كتابة البريد بشكل صحيح وكلمة مرور قوية");
    }
};
