function goToStep2() {
    changeStep("step1", "step2");
}

function goToStep3() {
    changeStep("step2", "step3");
}

function finalStep() {
    document.getElementById("step3").classList.remove("active");
    document.querySelector(".final-message").style.display = "block";
    startFireworks();
    createRing();
}

function changeStep(current, next) {
    document.getElementById(current).classList.remove("active");
    document.getElementById(next).classList.add("active");
}

function moveButton(btn) {
    const x = Math.random() * 300;
    const y = Math.random() * 300;
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

/* ❤️ Hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 400);


/* 🎆 Fireworks */
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 60; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            dx: (Math.random() - 0.5) * 6,
            dy: (Math.random() - 0.5) * 6,
            life: 100
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.dx;
            p.y += p.dy;
            p.life--;

            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();

            if (p.life <= 0) particles.splice(i, 1);
        });

        requestAnimationFrame(animate);
    }

    animate();
}
