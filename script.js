// 1. ระบบเปิดจดหมาย และเริ่มเพลงอัตโนมัติ
document.getElementById('open-btn').addEventListener('click', function() {
    const envelope = document.getElementById('envelope-wrapper');
    const bgMusic = document.getElementById('bg-music');
    const mainContent = document.getElementById('main-content');
    const video = document.getElementById('hbd-video');

    envelope.style.transform = 'translateY(-100vh)';
    setTimeout(() => {
        envelope.classList.add('hidden');
        mainContent.classList.remove('hidden');
        bgMusic.play(); // เริ่มเพลง
        video.play();   // เริ่มวิดีโอ
        createHearts(); // เริ่มหัวใจลอย
    }, 1000);
});

// 2. เอฟเฟกต์หัวใจลอยเบื้องหลัง
function createHearts() {
    const container = document.getElementById('hearts-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 400);
}

// 3. ระบบเป่าเทียน + พลุ Confetti
document.getElementById('blow-btn').addEventListener('click', function() {
    document.getElementById('flame').style.display = 'none';
    document.getElementById('blow-btn').style.display = 'none';
    document.getElementById('wish-message').classList.remove('hidden');

    // ยิงพลุฉลอง
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#ffafbd', '#ffffff']
    });

    startTyping();
});

// 4. Typing Effect สำหรับคำอวยพร
const message = "สุขสันต์วันเกิดนะที่รัก... ขอบคุณที่เกิดมาให้เค้ารักนะ ขอให้มีความสุขที่สุดในโลก สัญญาว่าจะอยู่ข้างๆ แบบนี้ไปทุกปีเลยนะ รักที่สุดครับ ❤️";
let index = 0;

function startTyping() {
    const target = document.getElementById('typing-text');
    if (index < message.length) {
        target.innerHTML += message.charAt(index);
        index++;
        setTimeout(startTyping, 100);
    }
}

// 5. Slideshow
let slideIdx = 0;
function runSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slideIdx++;
    if (slideIdx > slides.length) slideIdx = 1;
    slides[slideIdx-1].style.display = "block";
    setTimeout(runSlides, 3500);
}
runSlides();