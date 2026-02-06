try {
        await signInWithEmailAndPassword(auth, email, pass);
        window.location.href = "Home.html";
    } catch (e) {
        // إظهار نص الخطأ في الصفحة
        const errorElement = document.getElementById('error');
        errorElement.style.display = "block";
        errorElement.innerText = "⚠️ البريد أو كلمة المرور غير صحيحة، حاول مرة أخرى!";
    }
