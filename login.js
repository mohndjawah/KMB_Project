try {
        await signInWithEmailAndPassword(auth, email, pass);
        window.location.href = "Home.html";
    } catch (e) {
        // إظهار نص الخطأ في الصفحة
        const errorElement = document.getElementById('error');
        errorElement.style.display = "block";
        errorElement.innerText = "⚠️ البريد أو كلمة المرور غير صحيحة، حاول مرة أخرى!";
    }



const firebaseConfig = {
  apiKey: "AIzaSyAHKkzsldPVlYyVzrSnD_0CSx6KjBP_Wzo",
  authDomain: "kmb-project-e8baa.firebaseapp.com",
  projectId: "kmb-project-e8baa",
  storageBucket: "kmb-project-e8baa.firebasestorage.app",
  messagingSenderId: "76861686082",
  appId: "1:76861686082:web:850319fa7fa82de56448db",
  measurementId: "G-56SWVHXXQY"
};
