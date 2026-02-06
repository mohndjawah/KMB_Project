import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// === ضع كودك (Config) الذي نسخته من Firebase هنا ===
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    // ... بقية الكود
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isLogin = true;

// وظيفة التبديل بين الدخول والتسجيل
window.switchMode = () => {
    isLogin = !isLogin;
    document.getElementById('form-title').innerText = isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد";
    document.getElementById('mainBtn').innerText = isLogin ? "دخول للموقع" : "تسجيل حساب";
    document.getElementById('toggleLink').innerText = isLogin ? "ليس لديك حساب؟ إنشاء حساب" : "لديك حساب؟ سجل دخولك";
};

// وظيفة الزر الرئيسي
document.getElementById('mainBtn').onclick = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    try {
        if (isLogin) {
            await signInWithEmailAndPassword(auth, email, pass);
        } else {
            await createUserWithEmailAndPassword(auth, email, pass);
        }
        // إخفاء واجهة الدخول وإظهار الرئيسية
        document.getElementById('auth-card').classList.add('animate__animated', 'animate__fadeOutDown');
        setTimeout(() => {
            document.getElementById('auth-card').style.display = 'none';
            document.getElementById('home-screen').style.display = 'block';
            document.getElementById('home-screen').classList.add('animate__animated', 'animate__backInUp');
            document.getElementById('user-display').innerText = email;
        }, 500);
    } catch (e) {
        msg.style.display = 'block';
        msg.innerText = "خطأ: تأكد من صحة البريد أو كلمة المرور";
    }
};




// وظيفة زر الخروج
window.logout = function() {
    // يمكنك إضافة رسالة تأكيد بسيطة إذا أردت
    alert("تم تسجيل الخروج.. نراكم قريباً!");
    
    // العودة لصفحة تسجيل الدخول
    window.location.href = "login.html";
};
